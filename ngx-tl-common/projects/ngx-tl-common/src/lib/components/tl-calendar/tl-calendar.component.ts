import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITlCalendarEvent {
  date: Date,
  event: string,
}

@Component({
  selector: 'tl-calendar',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-flex-block"'
    },
  templateUrl: './tl-calendar.component.html',
  styleUrls: ['./tl-calendar.component.scss']
})
export class TlCalendarComponent implements OnInit {

  /**
   * Size of the stepper
   * 'tl-full' by default
   */
  @Input() size: string = 'tl-big';

  /**
   * Style of the "front" of the select component, that contains the placeholder or selected option
   * tl-no-style by default
   */
  @Input() buttonStyle: string = 'tl-primary-style';
  
  /**
   * Selection mode for calendar dates. May be 'select', 'pick-one', 'range', 'highlight' or 'none'
   */
  @Input() selectionMode: string = 'select';
 
  /**
   * Initial selected dates
   */
  @Input() initalSelectedDates: Date[] = [];
  
  /**
   * Event in calendar. natively synchrone as it cannot be created from calendar itself
   * Events are only shown if selection mode id 'highlight'
   */
  @Input() events: ITlCalendarEvent[] = [];
  
  /**
   * Style of the displayed events
   * Style may be 'outlined' or 'sketch'
   */
  @Input() eventStyle: string = 'outlined';
   
  /**
   * Tells if the components shall be synchrone, 
   * which means that an initial selection change changes the component state
   */
  @Input() synchrone: boolean = false;
  
  
  /**
   * Event that is emitted when a date is chosen
   */
  @Output() selectDate: EventEmitter<Date> = new EventEmitter<Date>();
  
    /**
   * Event that is emitted when a date is unselected
   */
  @Output() unselectDate: EventEmitter<Date> = new EventEmitter<Date>();
  
  /**
   * Event that is emitted when the date selection changes
   */
  @Output() selectDates: EventEmitter<Date[]> = new EventEmitter<Date[]>();
  
  /**
   * Event that is emitted when a date range is selected. Range is the carried payload
   */
  @Output() selectRange: EventEmitter<Date[]> = new EventEmitter<Date[]>();
  
    /**
   * Event that is emitted when a calendar event is clicked
   */
  @Output() clickEvent: EventEmitter<ITlCalendarEvent> = new EventEmitter<ITlCalendarEvent>();
  
  /**
   * Constants
   */
  public DAYS_IN_WEEK: string[] = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  public MONTHS_IN_YEAR: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  
  /**
   * Today
   */
  public today: Date;
  
  /**
   * Current contextual year of the component calendar
   */
  public currentYear: number;
  
  /**
   * Current contextual month of the component calendar
   */
  public currentMonth: number;
  
  /**
   * Current days in current month
   */
  public currentDaysInMonth: Date[];
  
  /**
   * Selected dates
   */
  public selectedDates: Date[] = [];

  constructor() { }

  ngOnInit(): void {
    
    // Initialize calendar context
    const now = new Date();
    this.today = now;
    this.currentMonth = now.getMonth();
    this.currentYear = now.getFullYear();
    this.currentDaysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear); 
    
    // Initialize selected date    
    this.selectedDates = [... this.initalSelectedDates];
  }
  
  
  /**
   * Handles year increment
   */  
  public onIncrementYear(){
    this.currentYear ++;
    this.currentDaysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }

  /**
   * Handles year decrement
   */ 
  public onDecrementYear(){
    this.currentYear --;
    this.currentDaysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }
  
  /**
   * Handles month increment
   */ 
  public onIncrementMonth(){
    if(this.currentMonth != 11) {
      this.currentMonth++;
    }
    else {
      this.currentYear++;
      this.currentMonth = 0;
    }
    
    this.currentDaysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }
  
  /**
   * Handles year decrement
   */ 
  public onDecrementMonth(){
    if(this.currentMonth != 0) {
      this.currentMonth--;
    }
    else {
      this.currentYear--;
      this.currentMonth = 11;
    }
    
    this.currentDaysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }
  
  
  public onClickDate(date: Date){
    
    // Do nothing is selection mode is set to 'none'
    if(this.selectionMode == 'none'){
      return;
    }
    
    // Handles if date is already selected (unselect)
    if(this.isSelected(date)){
      let correspondingSelectedDate: Date = this.getCorrespondingSelectedDate(date);
      const index = this.selectedDates.indexOf(correspondingSelectedDate);
      if (index > -1) {
        this.selectedDates.splice(index, 1);
      }
      this.unselectDate.next(date);
      return;
    }
    
    // Case selection mode is Select
    if (this.selectionMode == 'select') {
      this.selectedDates.push(date);
    }
    
    // Case selection mode is Range
    else if (this.selectionMode == 'range') {
      
      if(this.selectedDates.length == 0) {
        this.selectedDates.push(date);
      }
      else if (this.selectedDates.length == 1) {
        if(this.selectedDates[0] < date) {
          this.selectedDates.push(date);
        }
        else {
          this.selectedDates = [date, this.selectedDates[0]];
        }
      }
      else if (this.selectedDates.length == 2){
        this.selectedDates = [];
        this.selectedDates.push(date);
      }
      
      this.selectRange.next(this.selectedDates);
    }
    
    // Case selection mode is Pick-one or Highlight, only select one at a time
    else if (this.selectionMode == 'highlight' || this.selectionMode == 'pick-one'){
      this.selectedDates = [];
      this.selectedDates.push(date);
    }
    
    // Anyway emit the selectDate and selectDates events
    this.selectDate.next(date);
    this.selectDates.next(this.selectedDates);
  }
  
  /**
   * Handles click on an event
   */
  public onClickEvent(event: ITlCalendarEvent){
    this.clickEvent.next(event);
  }
  
  /**
   * Gets all events associated to a date from event table
   */
  public getEventsFromDate(date: Date){
    let result: ITlCalendarEvent[] = []
    for(let event of this.events){
      if(this.areSameDay(date, event.date)){
        result.push(event);
      }
    }
    return result;
  }
  
  /**
   * Tells if a date is in the selected dates array
   */
  public isSelected(day: Date): boolean{
    for(let date of this.selectedDates) {
      if(this.areSameDay(date, day)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Get the selected Date object corresponding to the provided date, if any. null if none 
   */
  private getCorrespondingSelectedDate(day: Date): Date {
    for(let date of this.selectedDates) {
      if(this.areSameDay(date, day)) {
        return date;
      }
    }
    return null;
  }
  
  
  /**
   * Get all days of a month, as Date objects
   */
  private getDaysInMonth(month: number, year: number): Date[] {
    var date = new Date(year, month, 1);
    var days = [];
    
    // If first day is not monday, get to monday from previous month
    while (date.getDay() > 1) {
      date.setDate(date.getDate() - 1);
    }
    
    // Consider next 35 days
    for(let i = 0; i < 35; i++){
      let newDate: Date = new Date(date);
      if(this.areSameDay(newDate, this.today)){
        this.today = newDate;
      }
      days.push(newDate);
      date.setDate(date.getDate() + 1);
    }
   
    // Return result
    return days;
  }
  
  /**
   * Tells if two dates referes to the same day
   */
  private areSameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

}
