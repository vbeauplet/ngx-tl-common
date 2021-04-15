import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-active-image-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-active-image-view.component.html',
  styleUrls: ['./tl-active-image-view.component.css']
})
export class TlActiveImageViewComponent implements OnInit {

  public htmlCode: string = `
  <tl-active-image
    class="tl-margined"
    [size]="'tl-small'"
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
      },
    ]"
    (clickIcon)="this.onClickIcon($event)">
  </tl-active-image>
    `;
    
  public tsCode: string = `
  /**
   * Handles click on an active icon of the active image
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on button ' + icon);
  }
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }
  
  /**
   * Handles click on an active icon of the active image
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on icon ' + icon);
  }


}
