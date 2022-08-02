import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';
import { ITlCalendarEvent } from 'ngx-tl-common/lib/components/tl-calendar/tl-calendar.component';

@Component({
  selector: 'tls-calendar-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-calendar-view.component.html',
  styleUrls: ['./tl-calendar-view.component.css']
})
export class TlCalendarViewComponent implements OnInit {

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles click on an select range
   */
  public onClickSelectRange(dates: Date[]){
    this.alertService.raiseInfo('Date range selected: ' + dates[0].toDateString + ' - ' + dates[1].toDateString);
  }
    `;
    
  public htmlCode2: string;
  
  public tsCode2: string = `
  /**
   * Handles date selection
   */
  public onSelectDate(date: Date){
    this.alertService.raiseInfo('Date selected: ' + date.toDateString());
  }
  
   /**
   * Handles click on an event
   */
  public onClickEvent(event: ITlCalendarEvent){
    this.alertService.raiseInfo('Click event: ' + event.event);
  }  
    `;
    
  /**
   * Bindable list of events to display in calendar
   */
  public events: ITlCalendarEvent[] = [
      {
        date: new Date(Date.now() + 604800000),
        event: 'Anniversaire Thuy'
      },
      {
        date: new Date(Date.now() + 1304800000),
        event: 'Anniversaire Vince'
      }
    ];

  constructor(
      private alertService: TlAlertService,
      public componentPreferenceService: ComponentPreferencesService
    ) { }

  ngOnInit(): void {
    // Refresh configurable HTML code
    this.refreshHtmlCode();
    
    // Subscribe to any change on component sample style
    this.componentPreferenceService.styleSubject.subscribe(() => {
        this.refreshHtmlCode();
      });
  }
  
  /**
   * Refreshes HTML Code
   */
  public refreshHtmlCode(){
    this.htmlCode = `
  <tl-calendar
    [buttonStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [selectionMode]='range'
    (selectRange)="this.onSelectRange($event)">
  </tl-calendar>
    `;
    
    this.htmlCode2 = `
  <tl-calendar
    [buttonStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [selectionMode]="'highlight'"
    [eventStyle]="'sketch'"
    [events]="this.events"
    (selectDate)="this.onSelectDate($event)"
    (clickEvent)="this.onClickEvent($event)">
  </tl-calendar>
    `;
  }
  
  
  /**
   * Handles select range
   */
  public onSelectRange(dates: Date[]){
    this.alertService.raiseInfo('Date range selected: ' + dates[0].toDateString() + ' - ' + dates[1].toDateString());
  }
  
  
  /**
   * Handles date selection
   */
  public onSelectDate(date: Date){
    this.alertService.raiseInfo('Date selected: ' + date.toDateString());
  }
  
   /**
   * Handles click on an event
   */
  public onClickEvent(event: ITlCalendarEvent){
    this.alertService.raiseInfo('Click event: ' + event.event);
  }

}
