import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-spinner-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-spinner-view.component.html',
  styleUrls: ['./tl-spinner-view.component.css']
})
export class TlSpinnerViewComponent implements OnInit {

  /**
   * Loading status of the spinner
   */
  public spinnerLoadingStatus = 0;

  public htmlCode: string = `
  <tl-spinner
    [loadingStatus]="this.spinnerLoadingStatus">
  </tl-spinner>
    `;
    
  public tsCode: string = `
  /**
   * Loading status of the spinner
   */
  public spinnerLoadingStatus = 0;
  
  ngOnInit(): void {
    
    // Show spinner status possible changes
    
    // Success after 5seconds for two seconds, then back to no spinner, then back to initial state
    setTimeout(() => {
      this.spinnerLoadingStatus = 1;
      
      setTimeout(() => {
        this.spinnerLoadingStatus = -1;
        setTimeout(() => {
          this.spinnerLoadingStatus = 0;
        }, 2000);
      }, 2000);
    }, 5000);
    
    // Failure after 5seconds for two seconds, then back to no spinner, then back to initial state
    setTimeout(() => {
      this.spinnerLoadingStatus = 2;
      
      setTimeout(() => {
        this.spinnerLoadingStatus = -1;
        setTimeout(() => {
          this.spinnerLoadingStatus = 0;
        }, 2000);
      }, 2000);
    }, 15000);
    
  }
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
    
    // Show spinner status possible changes
    
    // Success after 5seconds for two seconds, then back to no spinner, then back to initial state
    setTimeout(() => {
      this.spinnerLoadingStatus = 1;
      
      setTimeout(() => {
        this.spinnerLoadingStatus = -1;
        setTimeout(() => {
          this.spinnerLoadingStatus = 0;
        }, 2000);
      }, 2000);
    }, 5000);
    
    // Failure after 5seconds for two seconds, then back to no spinner, then back to initial state
    setTimeout(() => {
      this.spinnerLoadingStatus = 2;
      
      setTimeout(() => {
        this.spinnerLoadingStatus = -1;
        setTimeout(() => {
          this.spinnerLoadingStatus = 0;
        }, 2000);
      }, 2000);
    }, 15000);
    
  }
  
  /**
   * Handles click on the button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Click on button !');
  }


}
