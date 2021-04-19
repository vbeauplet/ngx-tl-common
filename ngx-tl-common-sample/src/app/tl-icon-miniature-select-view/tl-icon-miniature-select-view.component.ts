import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-icon-miniature-select-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-icon-miniature-select-view.component.html',
  styleUrls: ['./tl-icon-miniature-select-view.component.css']
})
export class TlIconMiniatureSelectViewComponent implements OnInit {

  public htmlCode: string = `
<tl-icon-miniature-select
  class="tl-big-bottom-margined"
  [miniatureHeight]="60"
  [placeholder]="'TC Link'"
  [size]="'tl-medium'"
  [icon]="'$'"
  [tlStyle]="'tl-neumorphic'"
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
    ]"
  [synchroneFeedback]="true">
</tl-icon-miniature-select>
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }


}
