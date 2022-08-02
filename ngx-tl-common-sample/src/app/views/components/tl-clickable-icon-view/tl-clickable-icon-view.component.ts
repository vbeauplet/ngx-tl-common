import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'app-tl-clickable-icon-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-clickable-icon-view.component.html',
  styleUrls: ['./tl-clickable-icon-view.component.css']
})
export class TlClickableIconViewComponent implements OnInit {
  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles click on icon
   */
  public onClickIcon(){
    this.alertService.raiseInfo('Icon is clicked');
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
  <tl-clickable-icon
    [size]="60"
    [color]="'` + this.componentPreferenceService.style.color + `'"
    [icon]="'ion-notifications-outline'"
    [iconOn]="'ion-notifications'"
    [label]="'Go to alert system'"
    (click)="this.onClickIcon()">
  </tl-clickable-icon>
    `;
  }
  
  /**
   * Handles click on icon
   */
  public onClickIcon(){
    this.alertService.raiseInfo('Icon is clicked');
  }

}
