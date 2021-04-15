import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

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
  
  
  public htmlCode: string = `
  <tl-action-center
    [tlContainerNature]="true"
    [tlStyle]="'tl-soft-transparent'"
    [buttons]="[
      {
        name: 'play',
        icon: '{',
        label: 'Play'
      },
      {
        name: 'pause',
        icon: '|',
        label: 'Pause'
      },
      {
        name: 'stop',
        icon: '~',
        label: 'Stop'
      }
    ]"
    (clickButton)="this.onClickButton($event)">
  </tl-action-center>
    `;
    
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
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
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
