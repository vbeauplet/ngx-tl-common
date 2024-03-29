import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-alert-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-alert-view.component.html',
  styleUrls: ['./tl-alert-view.component.css']
})
export class TlAlertViewComponent implements OnInit {

  public alertHtmlCode: string = `
<tl-alert
  [tlStyle]="'tl-glassmorphic'"
  [buttonStyle]="'tl-sharp-transparent'">
</tl-alert>
  `;
  
  public raiseInfoCode: string = `
  /**
   * Handles click on the 'Raise Info example' link
   */
  public onClickRaiseInfo(){
    this.alertService.raiseInfo("This is an info");
  }
`
  ;
  
  public raiseConfirmationCode: string = `
  /**
   * Handles click on the 'Raise Confirmation example' link
   */
  public onClickRaiseConfirmation(){
    this.alertService.raiseConfirmationAlert("Are you sure you want to delete this?", 2)
      .then((response: string) => {
          // Display response in an info popup 1 seconds after click
          setTimeout(() => {
              this.alertService.raiseInfo('Response: ' + response);
            }, 1000);
        });
  }
`
  ;
  
  public raiseDecisionCode: string = `
  /**
   * Handles click on the 'Raise Decision example' link
   */
  public onClickRaiseDecision(){
    this.alertService.raiseDecisionAlert(
      'Select the option you want',
      [
        {
          name:'option1',
          icon: 'ion-bicycle-outline',
          color: 'tl-main',
          label: 'Option 1'
        },
        {
          name:'option2',
          icon: 'ion-car-outline',
          color: 'tl-main',
          label: 'Option 2'
        },
        {
          name:'option3',
          icon: 'ion-bus-outline',
          color: 'tl-main',
          label: 'Option 3'
        },
      ], 1)
      .then((response: string) => {
          // Display response in an info popup 1 seconds after click
          setTimeout(() => {
              this.alertService.raiseInfo('Response: ' + response);
            }, 1000);
        });
  }
`
  ;

  constructor(
    private alertService: TlAlertService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Handles click on the 'Raise Info example' link
   */
  public onClickRaiseInfo(){
    this.alertService.raiseInfo("This is an info");
  }


  /**
   * Handles click on the 'Raise Confirmation example' link
   */
  public onClickRaiseConfirmation(){
    this.alertService.raiseConfirmationAlert("Are you sure you want to delete this?", 2)
      .then((response: string) => {
          // Display response in an info popup 1 seconds after click
          setTimeout(() => {
              this.alertService.raiseInfo('Response: ' + response);
            }, 1000);
        });
  }
  
  /**
   * Handles click on the 'Raise Decision example' link
   */
  public onClickRaiseDecision(){
    this.alertService.raiseDecisionAlert(
      'Select the option you want',
      [
        {
          name:'option1',
          icon: 'ion-bicycle-outline',
          color: 'tl-main',
          label: 'Option 1'
        },
        {
          name:'option2',
          icon: 'ion-car-outline',
          color: 'tl-main',
          label: 'Option 2'
        },
        {
          name:'option3',
          icon: 'ion-bus-outline',
          color: 'tl-main',
          label: 'Option 3'
        },
      ], 1)
      .then((response: string) => {
          // Display response in an info popup 1 seconds after click
          setTimeout(() => {
              this.alertService.raiseInfo('Response: ' + response);
            }, 1000);
        });
  }
}
