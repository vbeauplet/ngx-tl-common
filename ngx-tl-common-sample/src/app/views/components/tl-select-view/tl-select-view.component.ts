import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-select-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-select-view.component.html',
  styleUrls: ['./tl-select-view.component.css']
})
export class TlSelectViewComponent implements OnInit {

  public htmlCode: string = `
<tl-select
  class="tl-big-margined"
  [placeholder]="'TC Link'"
  [size]="'tl-small'"
  [textAlign]="'left'"
  [tlStyle]="'tl-neumorphic-inset-sharp'"
  [optionPanelStyle]="'tl-sharp-transparent'"
  [height]="'50px'"
  [proposals]="[
      {
        name: 'Proposal 1',
        icon: 'k'
      },
      {
        name: 'Proposal 2',
        icon: 'x'
      },
      {
        name: 'Proposal 3',
        icon: 'y'
      }
    ]">
</tl-select>
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }


}
