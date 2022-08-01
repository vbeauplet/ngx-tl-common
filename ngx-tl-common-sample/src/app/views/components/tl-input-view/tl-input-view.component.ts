import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-input-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-input-view.component.html',
  styleUrls: ['./tl-input-view.component.css']
})
export class TlInputViewComponent implements OnInit {
  
  
  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles press enter
   */
  public onPressEnter(value: string){
    this.alertService.raiseInfo('Value is: ' + value);
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
   <tl-input
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [type]="'text'"
    [placeholder]="'How old are you?'"
    [icon]="'ion-fish-outline'"
    [lingeringPlaceholder]="true"
    [validationOn]="true"
    [validationInlineStyle]="true"
    [validationFilters]="['number']"
    [validationMessage]="'Shall be a number!'"
    (pressEnter)="this.onPressEnter($event)">
  </tl-input>
    `;
  }
  
  /**
   * Handles press enter
   */
  public onPressEnter(value: string){
    this.alertService.raiseInfo('Value is: ' + value);
  }

}
