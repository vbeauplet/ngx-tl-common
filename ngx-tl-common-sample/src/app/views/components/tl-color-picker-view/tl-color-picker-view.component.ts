import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-color-picker-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-color-picker-view.component.html',
  styleUrls: ['./tl-color-picker-view.component.css']
})
export class TlColorPickerViewComponent implements OnInit {

  public showSizesPopup: boolean = false;

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles item selection
   */
  public onSelectItem(item: any){
    this.alertService.raiseInfo('Select item ' + item.payload);
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
  <tl-color-picker
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [colorCircleSize]="100"
    [initialItems]="[
      {
        label: 'Greenish',
        payload: 'greenish',
        colors: ['green','blue','black', 'grey']
      },
      {
        label: 'Redish',
        payload: 'redish',
        colors: ['red']
      },
      {
        label: 'Pink',
        payload: 'pink',
        colors: ['pink','purple']
      }
    ]"
    (selectItem)="this.onSelectItem($event)">
  </tl-color-picker>
    `;
  }
  
  
  /**
   * Handles item selection
   */
  public onSelectItem(item: any){
    this.alertService.raiseInfo('Select item ' + item.payload);
  }

}
