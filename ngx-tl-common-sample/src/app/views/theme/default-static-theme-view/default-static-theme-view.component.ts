import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-default-static-theme-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './default-static-theme-view.component.html',
  styleUrls: ['./default-static-theme-view.component.css']
})
export class DefaultStaticThemeViewComponent implements OnInit {

 public angularJsonCode: string = `
"styles": [
  "src/styles.css",
  "./node_modules/ngx-tl-common/lib/style/tl-common-styles.scss",
  "./node_modules/ngx-tl-common/lib/style/themes/tl-common-light-theme.scss"
],
    `;

  constructor() { }

  ngOnInit(): void {
  }

}
