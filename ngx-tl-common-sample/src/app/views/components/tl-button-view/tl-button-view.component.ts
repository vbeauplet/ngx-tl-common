import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-button-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-button-view.component.html',
  styleUrls: ['./tl-button-view.component.css']
})
export class TlButtonViewComponent implements OnInit {

  public htmlCode: string = `
  <tl-button
    [icon]="O"
    [label]="'Speak'"
    [labelPosition]="Right"
    (clickButton)="this.onClickButton()">
  </tl-button>
    `;
    
  public tsCode: string = `
  /**
   * Handles click on the button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Click on button !');
  }
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }
  
  /**
   * Handles click on the button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Click on button !');
  }


}
