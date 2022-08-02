import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-chip-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-chip-view.component.html',
  styleUrls: ['./tl-chip-view.component.css']
})
export class TlChipViewComponent implements OnInit {

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles click on chip button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Chip button is clicked');
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
  <tl-chip
    style="margin:10px"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [button]="'ion-pricetag-outline'"
    (clickButton)="this.onClickButton()">
    Normal
  </tl-chip>
  
  <tl-chip
    style="margin:10px"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [button]="'ion-leaf-outline'"
    [selected]="true"
    (clickButton)="this.onClickButton()">
    This one is selected
  </tl-chip>
  
  <tl-chip
    style="margin:10px"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [button]="'ion-battery-dead-outline'"
    [disabled]="true"
    (clickButton)="this.onClickButton()">
    And this one is disabled
  </tl-chip>
    `;
  }
  
  /**
   * Handles click on chip button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Chip button is clicked');
  }

}
