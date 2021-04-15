import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-toggler-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-toggler-view.component.html',
  styleUrls: ['./tl-toggler-view.component.css']
})
export class TlTogglerViewComponent implements OnInit {

  public htmlCode: string = `
  <tl-toggler
    [size]="'tl-small'"
    [label]="'Toggle on/off'"
    [onBgColor]="'tl-outline'">
  </tl-toggler>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
