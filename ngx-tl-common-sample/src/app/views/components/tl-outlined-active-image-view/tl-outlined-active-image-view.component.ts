import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-outlined-active-image-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-outlined-active-image-view.component.html',
  styleUrls: ['./tl-outlined-active-image-view.component.css']
})
export class TlOutlinedActiveImageViewComponent implements OnInit {

  public htmlCode: string = `
  <tl-outlined-active-image
    class="tl-margined"
    [size]="'tl-small'"
    [tlStyle]="'tl-neumorphic'"
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
