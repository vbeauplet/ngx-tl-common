import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-loader-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-loader-view.component.html',
  styleUrls: ['./tl-loader-view.component.css']
})
export class TlLoaderViewComponent implements OnInit {

  public htmlCode: string = `
  <tl-loader>
  </tl-loader>
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  
  ngOnInit(): void {}
}
