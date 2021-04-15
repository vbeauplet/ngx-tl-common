import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-interactive-input-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-interactive-input-view.component.html',
  styleUrls: ['./tl-interactive-input-view.component.css']
})
export class TlInteractiveInputViewComponent implements OnInit {

  /**
   * Bindable property
   */
  public name: string = 'Valentin';

  public htmlCode: string = `
  <tl-interactive-input
    [size]="'tl-near-half-responsive'"
    [inputLabel]="'Name'"
    [placeholder]="this.name"
    (changeValue)="this.onChangeValue($event)">
  </tl-interactive-input>
    `;
    
  public tsCode: string = `
  /**
   * Bindable property
   */
  public name: string = 'Valentin';

  /**
   * Handles value change from the interactive input
   */
  public onChangeValue(value: string){
    this.alertService.raiseInfo('New value: ' + value);
  }
    `;
    
  public htmlCode2: string = `
  <tl-interactive-input
    [size]="'tl-near-half-responsive'"
    [placeholder]="this.name"
    [inline]="true"
    (changeValue)="this.onChangeValue($event)">
  </tl-interactive-input>
    `;
    
  public tsCode2: string = `
  /**
   * Bindable property
   */
  public name: string = 'Valentin';

  /**
   * Handles value change from the interactive input
   */
  public onChangeValue(value: string){
    this.alertService.raiseInfo('New value: ' + value);
  }
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }
  
  /**
   * Handles value change from the interactive input
   */
  public onChangeValue(value: string){
    this.alertService.raiseInfo('New value: ' + value);
  }


}
