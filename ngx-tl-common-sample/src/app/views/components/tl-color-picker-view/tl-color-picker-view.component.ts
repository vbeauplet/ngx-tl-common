import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-color-picker-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-color-picker-view.component.html',
  styleUrls: ['./tl-color-picker-view.component.css']
})
export class TlColorPickerViewComponent implements OnInit {

  public showSizesPopup: boolean = false;

  public htmlCode: string = `
  <tl-color-picker
    [initialItems]="[
      {
        label: 'Greenish',
        payload: 'greenish',
        colors: ['green','blue']
      },
      {
        label: 'Redish',
        payload: 'greenish',
        colors: ['red','orange']
      },
      {
        label: 'Pink',
        payload: 'greenish',
        colors: ['pink','purple']
      }
    ]"
    (selectItem)="this.onSelectItem($event)">
  </tl-color-picker>
    `;
    
  public tsCode: string = `
  /**
   * Handles item selection
   */
  public onSelectItem(item: any){
    this.alertService.raiseInfo('Select item ' + item.payload);
  }
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }
  
  /**
   * Handles item selection
   */
  public onSelectItem(item: any){
    this.alertService.raiseInfo('Select item ' + item.payload);
  }

}
