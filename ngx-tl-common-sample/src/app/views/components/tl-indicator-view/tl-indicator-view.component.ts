import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-indicator-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-indicator-view.component.html',
  styleUrls: ['./tl-indicator-view.component.css']
})
export class TlIndicatorViewComponent implements OnInit {


  public htmlCode: string = `
  <tl-indicator
    [icon]="'P'"
    [text]="'80%'"
    [textPosition]="'bottom'"
    [iconSize]="40"
    [color]="'tl-outline'">
  </tl-indicator>
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  
  ngOnInit(): void {}
}
