import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-rater-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-rater-view.component.html',
  styleUrls: ['./tl-rater-view.component.css']
})
export class TlRaterViewComponent implements OnInit {

  public htmlCode: string = `
  <tl-rater
    [icon]="'nutrition'"
    [iconNumber]="5"
    [iconHeight]="50"
    (setRate)="onSetRate()">
  </tl-rater>
    `;
    
    public tsCode: string = `
  /**
   * Handles set rate
   */
  public onSetRate(rate: number){
    this.alertService.raiseInfo('New rate: ' + rate);
  }
  `;

  constructor(
      private alertService: TlAlertService
    ) { }

  
  ngOnInit(): void {}
  
  /**
   * Handles set rate
   */
  public onSetRate(rate: number){
    this.alertService.raiseInfo('New rate: ' + rate);
  }
}
