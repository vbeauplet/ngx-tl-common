import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-miniature-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-miniature-view.component.html',
  styleUrls: ['./tl-miniature-view.component.css']
})
export class TlMiniatureViewComponent implements OnInit {


  public htmlCode: string = `
  <tl-miniature
    [photoUrl]="'/assets/img/herisson.jpg'"
    [label]="'Hedgehog'"
    [size]="'tl-medium'"
    [tlStyle]="'tl-neumorphic'"
    [borderRadius]="1000">
    
    Very cute
    
  </tl-miniature>
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  
  ngOnInit(): void {}
}
