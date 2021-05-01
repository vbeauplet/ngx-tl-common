import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-outlined-active-image-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-outlined-active-image-view.component.html',
  styleUrls: ['./tl-outlined-active-image-view.component.css']
})
export class TlOutlinedActiveImageViewComponent implements OnInit {

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
  <tl-outlined-active-image
    class="tl-margined"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [shape]="'round'"
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
  </tl-outlined-active-image>
    `;
  }
  
  /**
   * Handles click on an active icon of the active image
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on icon ' + icon);
  }


}
