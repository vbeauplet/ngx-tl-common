import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-button-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-button-view.component.html',
  styleUrls: ['./tl-button-view.component.css']
})
export class TlButtonViewComponent implements OnInit {

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles click on the button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Click on button !');
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
  <tl-button
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [shape]="'` + this.componentPreferenceService.style.shape + `'"
    [icon]="O"
    [label]="'Speak'"
    [labelPosition]="Right"
    (clickButton)="this.onClickButton()">
  </tl-button>
    `;
  }
  
  /**
   * Handles click on the button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Click on button !');
  }


}
