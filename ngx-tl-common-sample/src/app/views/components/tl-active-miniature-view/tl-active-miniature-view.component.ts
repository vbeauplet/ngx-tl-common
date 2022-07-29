import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-active-miniature-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-active-miniature-view.component.html',
  styleUrls: ['./tl-active-miniature-view.component.css']
})
export class TlActiveMiniatureViewComponent implements OnInit {

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles click on an active icon of the active miniature
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on button ' + icon);
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
  <tl-active-miniature
    [photoUrl]="'/assets/img/herisson.jpg'"
    [label]="'Hedgehog'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [borderRadius]="1000"
    [activeIcons]="[
      {
        name: 'play',
        icon: '{',
        label: 'Play'
      }
    ]"
    (clickIcon)="this.onClickIcon($event)">
    
    Very cute
    
  </tl-active-miniature>
    `;
  }
  
  
  /**
   * Handles click on an active icon of the active miniature
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on icon ' + icon);
  }


}
