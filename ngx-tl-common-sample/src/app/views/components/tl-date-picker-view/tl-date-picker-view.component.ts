import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-date-picker-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-date-picker-view.component.html',
  styleUrls: ['./tl-date-picker-view.component.css']
})
export class TlDatePickerViewComponent implements OnInit {
  
  
  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles click on an select range
   */
  public onClickSelectRange(dates: Date[]){
    this.alertService.raiseInfo('Date range selected: ' + dates[0].toDateString + ' - ' + dates[1].toDateString);
  }
    `;

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
  <tl-date-picker
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [calendarStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [calendarButtonStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [placeholder]="'Pick a date'"
    [lingeringPlaceholder]="true"
    [validationOn]="true"
    [validationInlineStyle]="true"
    [validationMessage]="'Shall be a date!'"
    (selectDate)="this.onSelectDate($event)">
  </tl-date-picker>
    `;
  }
  
  /**
   * Handles date selection
   */
  public onSelectDate(date: Date){
    this.alertService.raiseInfo('Date selected: ' + date.toDateString());
  }

}
