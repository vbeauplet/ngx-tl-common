import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-square-icon-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-square-icon-view.component.html',
  styleUrls: ['./tl-square-icon-view.component.css']
})
export class TlSquareIconViewComponent implements OnInit {

  /**
   * Loading status of the spinner
   */
  public spinnerLoadingStatus = 0;

  public htmlCode: string = `
  <tl-square-icon
    [icon]="'G'"
    [size]="50"
    [color]="'tl-outline'">
  </tl-square-icon>
    `;

  constructor() { }

  ngOnInit(): void {
  }


}
