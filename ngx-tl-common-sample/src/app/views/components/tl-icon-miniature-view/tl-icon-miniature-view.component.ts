import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-icon-miniature-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-icon-miniature-view.component.html',
  styleUrls: ['./tl-icon-miniature-view.component.css']
})
export class TlIconMiniatureViewComponent implements OnInit {

  /**
   * Current progress state
   */
  public current: number = 0;
  
  /**
   * Tells if progress process is in success
   */
  public success: boolean = true;

  public htmlCode: string = `
  <tl-icon-miniature
    [icon]="'G'"
    [size]="'tl-near-half-responsive'"
    [tlStyle]="'tl-neumorphic'"
    [bgColor]="'tl-success'"
    [borderRadius]="25">
    
    All good
    
  </tl-icon-miniature>
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  
  ngOnInit(): void {}
}
