import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-active-image-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-active-image-view.component.html',
  styleUrls: ['./tl-active-image-view.component.css']
})
export class TlActiveImageViewComponent implements OnInit {

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles click on an active icon of the active image
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
  <tl-active-image
    class="tl-margined"
    [shape]="'` + this.componentPreferenceService.style.shape + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [imageSrc]="'/assets/img/herisson.jpg'"
    [activeIcons]="[
      {
        name: 'play',
        icon: '{',
        label: 'Play'
      },
      {
        name: 'pause',
        icon: '|',
        label: 'Pause'
      }
    ]"
    (clickIcon)="this.onClickIcon($event)">
  </tl-active-image>
    `;
  }
  
  
  /**
   * Handles click on an active icon of the active image
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on icon ' + icon);
  }


}
