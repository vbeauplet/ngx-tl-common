import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-icon-toggler-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-icon-toggler-view.component.html',
  styleUrls: ['./tl-icon-toggler-view.component.css']
})
export class TlIconTogglerViewComponent implements OnInit {
  
  public htmlCode: string;

  public tsCode: string = `
  /**
   * Handles toggle change
   */
  public onToggle(toggleState: boolean){
    this.alertService.raiseInfo('Toggle status changed to ' + toggleState);
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
  <tl-icon-toggler
    [size]="30"
    [icon]="'ion-heart-outline'"
    [iconOn]="'ion-heart'"
    [color]="'` + this.componentPreferenceService.style.color + `'"
    (toggle)="this.onToggle()">
  </tl-icon-toggler>
    `;
  }

  /**
   * Handles toggle change
   */
  public onToggle(toggleState: boolean){
    this.alertService.raiseInfo('Toggle status changed to ' + toggleState);
  }

}
