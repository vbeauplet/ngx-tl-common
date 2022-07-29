import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-use-alert-service-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './use-alert-service-view.component.html',
  styleUrls: ['./use-alert-service-view.component.css']
})
export class UseAlertServiceViewComponent implements OnInit {

  public alertServiceImportCode: string = `
import { TlAlertService } from 'ngx-tl-common';

 constructor(
      ...
      private alertService: TlAlertService,
      ...) {}
  `;
  
  public raiseInfoSignature: string = `
  /**
   * Raises an info alert
   */
  public raiseInfo(message: string);
`
  ;
  
  public raiseInfoCode: string = `
  this.alertService.raiseInfo("This is an info");
`
  ;

  public raiseWarningSignature: string = `
  /**
   * Raises a warning alert
   */
  public raiseWarning(message: string);
`
  ;
  
  public raiseErrorSignature: string = `
  /**
   * Raises an error alert
   */
  public raiseError(message: string);
`
  ;
  
  public raiseConfirmationAlertSignature: string = `
  /**
   * Raises a confirmation alert
   * Returns a promise which carries user response as potential payload (if resolved, payload of the promise is "accept" or "declined")
   */
  public raiseConfirmationAlert(message: string, severity: number): Promise<string>;
`
  ;
  
  public raiseConfirmationAlertCode: string = `
    this.alertService.raiseConfirmationAlert("Are you sure you want to delete this?", 2)
      .then((response: string) => {
          if(response == 'accept'){
            this.doDelete();
          }
          else if(response == 'decline'){
            // Do nothing
          }
        });
`
  ;
  
  public alertProposalCode: string = `
export interface ITlAlertProposal{
  name: string,
  icon: string,
  color: string,
  label: string
}
`
  ;
  
  public raiseDecisionAlertSignature: string = `
  /**
   * Raises a decision alert, with multiple custom proposals
   * Returns a promise which carries user response as potential payload
   */
  public raiseDecisionAlert(message: string, proposals: ITlAlertProposal[], severity: number): Promise<string>;
`
  ;

  constructor() { }

  ngOnInit(): void {
  }

}
