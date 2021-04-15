import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-shape-block-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-shape-block-view.component.html',
  styleUrls: ['./tl-shape-block-view.component.css']
})
export class TlShapeBlockViewComponent implements OnInit {


  public htmlCode: string = `
  <tl-shape-block
    class="tl-outline-bg-element"
    [size]="'tl-near-half'"
    [shape]="'square'">
  </tl-shape-block>
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  
  ngOnInit(): void {}
}
