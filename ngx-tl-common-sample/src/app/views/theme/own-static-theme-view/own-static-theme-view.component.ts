import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-own-static-theme-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './own-static-theme-view.component.html',
  styleUrls: ['./own-static-theme-view.component.css']
})
export class OwnStaticThemeViewComponent implements OnInit {

 public ownStyleCode: string = `
:root {
  --main-bg-color: #31383f;
  --main-bg-pattern: none;
  --element-bg-color: #31383f;
  --secondary-bg-color: #8CBDB9;
  --menu-bg-color:#31383f;
  --transparent-bg-color: rgba(0,0,0,0.3);
  --sharp-transparent-bg-color: rgba(0,0,0,0.0.6);
  
  --main-content-color: #F2E9EB;
  --secondary-content-color: #212529;
  --menu-content-color: #F2E9EB;
  --outline-content-color: #FFA101;
  --success-content-color: green;
  --failure-content-color: red;
  --neutral-content-color: orange;
  --soft-content-color: #80A1AF;
  
  --light-shadow-color: #3C444D;
  --dark-shadow-color: #262C31;
  --sharp-light-shadow-color: #3E474F;
  --sharp-dark-shadow-color: #24292F;
  
  --light-dome-color: #343C43;
  --dark-dome-color: #2C3239;
  
  // Configuration, but not part of the theme yet

  --title-font: norwester;
  --subtitle-font: norwester;
  --main-font: helvetica;
  
  --desktop-page-menu-padding-left:50px;
  --mobile-page-menu-padding-left:0px;
  --desktop-page-menu-padding-bottom:0px;
  --mobile-page-menu-padding-bottom:50px;
}
    `;

  constructor() { }

  ngOnInit(): void {
  }

}
