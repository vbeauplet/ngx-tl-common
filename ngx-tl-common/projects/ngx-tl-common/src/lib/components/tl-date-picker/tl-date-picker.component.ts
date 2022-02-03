import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tl-date-picker',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-flex-block"'
    },
  templateUrl: './tl-date-picker.component.html',
  styleUrls: ['./tl-date-picker.component.scss']
})
export class TlDatePickerComponent implements OnInit {

  /**
   * Size of the date picker
   * 'tl-full' by default
   */
  @Input() size: string = 'tl-full';

  /**
   * Style of the date-picker input
   */
  @Input() tlStyle: string = 'tl-primary-style';
  
  /**
   * Style of the date-picker calendar
   * If none, input style is used
   */
  @Input() calendarStyle: string = undefined;
   
  /**
   * Style of the date-picker calendar buttons
   */
  @Input() calendarButtonStyle: string = 'tl-primary-style';
  
  /**
   * Border radius of the input
   */
  @Input() borderRadius: string = 'tl-br-infinite';
  
  /**
   * Initial selected date
   * Null if none
   */
  @Input() initialSelectedDate: Date = null;
  
  /**
   * Placeholder of the input. When 'none' is the active option
   */
  @Input() placeholder: string = 'None';
  
  /**
   * Tells if plachoder shall linger whenever user has written an input
   */
  @Input() lingeringPlaceholder: boolean = false;
  
   
  /**
   * Tells if the select shall be synchrone, 
   * which means that an initial date change changes the component state
   */
  @Input() synchrone: boolean = false;
  /**
   * Activate input validation via potential check filters
   * (if no check filters everything is accepted) 
   */
  @Input() validationOn: boolean = false;
  
  /**
   * Potential check filters for the inputed string
   * Use standard filters: 'integer', 'number', 'date', 'password', 'no-space'
   * 'date' by default as it is a date picker
   */
  @Input() validationFilters: string[] = ['date'];
  
  /**
   * Message to display in case validation fails
   * Undefined if no message shall be displayed
   */
  @Input() validationMessage: string = 'La valeur doit être une date valide au format DD/MM/YYYY';
  
  
  /**
   * Event that is emitted when a date is chosen
   */
  @Output() selectDate: EventEmitter<Date> = new EventEmitter<Date>();
  
  /**
   * Event which is emitted when value is changed
   * Cariied payload is the raw input value 
   */
  @Output() changeInputValue: EventEmitter<string> = new EventEmitter<string>(); 
  
  /**
   * Event which is emitted when validation status is changed
   */
  @Output() changeValidationStatus: EventEmitter<number> = new EventEmitter<number>();
  
  /**
   * Display level of the calendar
   * 0 means undisplayed
   * 1 means hidden
   * 2 means show
   * 3 means show (after transition)
   */
  public displayCalendarLevel: number  = 0;
  
  /**
   * Selected date
   */
  public selectedDate: Date;
  
  /**
   * Selected date
   */
  public inputValue: string;


  constructor() { }

  ngOnInit(): void {
    
    // Set calendar style if undefined
    if(this.calendarStyle == undefined){
      this.calendarStyle = this.tlStyle;
    }
    
    // Set initial input value
    if(this.initialSelectedDate != undefined){
      this.selectedDate = this.initialSelectedDate;
      this.inputValue = this.selectedDate.toLocaleDateString();
    }
    
  }
  
  public showCalendar(){
    this.displayCalendarLevel = 1;
    setTimeout(() => {
      this.displayCalendarLevel = 2;
    }, 10);
    setTimeout(() => {
      this.displayCalendarLevel = 3;
    }, 300);
  }
  
  public hideCalendar(){
    this.displayCalendarLevel = 1;
    setTimeout(() => {
      this.displayCalendarLevel = 0;
    }, 300);
  }
  
  public onSelectDate(date: Date){
    this.selectedDate = date;
    this.inputValue = date.toLocaleDateString();
    this.selectDate.next(this.selectedDate);
    this.hideCalendar();
  }
  
  public onClickOutsideCalendar(){
    if(this.displayCalendarLevel == 3){
      this.hideCalendar();
    }
  }
  
  
}
