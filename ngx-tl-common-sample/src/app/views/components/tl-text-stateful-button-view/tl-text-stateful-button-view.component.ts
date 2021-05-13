import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-text-stateful-button-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-text-stateful-button-view.component.html',
  styleUrls: ['./tl-text-stateful-button-view.component.css']
})
export class TlTextStatefulButtonViewComponent implements OnInit {

  /**
   * Loading status of the button
   */
  public buttonLoadingStatus = -1;

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Loading status of the button
   */
  public buttonLoadingStatus = -1;
  
  /**
   * Handles click on the button
   */
  public onClickButton(){
    
    // Do something that takes time, tell it is loading
    this.buttonLoadingStatus = 0;
    
    // After 3s, tell it is ok 
    setTimeout(() => {
      this.buttonLoadingStatus = 1;
      
      // Then back to normal status after another 2s
      setTimeout(() => {
        this.spinnerLoadingStatus = -1;
      }, 2000);
      
    }, 5000);
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
  <tl-text-stateful-button
    [status]="this.buttonLoadingStatus"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [color]="'` + this.componentPreferenceService.style.color + `'"
    [icon]="'z'"
    [text]="'Upload'"
    (click)="this.onClickButton()">
  </tl-text-stateful-button>
    `;
  }
  
  /**
   * Handles click on the button
   */
  public onClickButton(){
    
    // Do something that takes time, tell it is loading
    this.buttonLoadingStatus = 0;
    
    // After 3s, tell it is ok 
    setTimeout(() => {
      this.buttonLoadingStatus = 1;
      
      // Then back to normal status after another 2s
      setTimeout(() => {
        this.buttonLoadingStatus = -1;
      }, 2000);
      
    }, 5000);
  }


}
