import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-action-center-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-action-center-view.component.html',
  styleUrls: ['./tl-action-center-view.component.css']
})
export class TlActionCenterViewComponent implements OnInit {
  
  /**
   * Loading status of the action center
   */
  public actionCenterLoadingStatus = -1;
  
  
  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Loading status of the action center
   */
  public actionCenterLoadingStatus = -1;
  
  /**
   * Handles click on a button of the action center
   */
  public onClickButton(button: string){
    this.actionCenterLoadingStatus = 0;
    this.alertService.raiseInfo('Click on button ' + button);
    setTimeout(() => {
        this.actionCenterLoadingStatus = -1;
      }, 3000);
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
  <tl-action-center
    [tlContainerNature]="true"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [buttonStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [buttonShape]="'` + this.componentPreferenceService.style.shape + `'"
    [buttons]="[
      {
        name: 'play',
        icon: '{',
        label: 'Play',
        color: 'tl-success'
      },
      {
        name: 'pause',
        icon: '|',
        label: 'Pause'
      },
      {
        name: 'stop',
        icon: '~',
        label: 'Stop',
        color: 'tl-failure'
      }
    ]"
    (clickButton)="this.onClickButton($event)">
  </tl-action-center>
    `;
  }
  
  
  /**
   * Handles click on a button of the action center
   */
  public onClickButton(button: string){
    this.actionCenterLoadingStatus = 0;
    this.alertService.raiseInfo('Click on button ' + button);
    setTimeout(() => {
        this.actionCenterLoadingStatus = -1;
      }, 3000);
  }


}
