import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-getting-started-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './getting-started-view.component.html',
  styleUrls: ['./getting-started-view.component.css']
})
export class GettingStartedViewComponent implements OnInit {

  public consoleCode: string = `
npm install ngx-tl-common
    `;
    
 public angularJsonCode: string = `
"styles": [
  "src/styles.css",
  "./node_modules/ngx-tl-common/lib/style/tl-common-styles.scss"
],
    `;
    
 public angularJson2Code: string = `
"styles": [
  "src/styles.css",
  "./node_modules/ngx-tl-common/lib/style/tl-common-styles.scss",
  "./node_modules/ngx-tl-common/lib/style/themes/tl-common-light-theme.scss"
],
    `;
    
     public tsCode: string = `
import { NgxTlCommonModule } from 'ngx-tl-common';
...
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTlCommonModule
  ],
    `;


  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }
}
