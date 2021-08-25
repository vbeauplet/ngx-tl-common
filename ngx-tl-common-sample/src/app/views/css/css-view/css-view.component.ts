import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-css-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './css-view.component.html',
  styleUrls: ['./css-view.component.css']
})
export class CssViewComponent implements OnInit {

    public pageDeclarationTsCode: string = `
@Component({
  selector: 'tls-css-view',
  host: { 'class' : 'tl-page'},
  templateUrl: './css-view.component.html',
  styleUrls: ['./css-view.component.css']
})
export class CssViewComponent implements OnInit {
    `;
    
    public flexPanelsHtmlCode: string = `
<div 
  class="tl-near-full-responsive tl-col-dir tl-hor-left tl-no-wrap tl-flex-block">
</div>
<div 
  class="tl-margined tl-half tl-col-dir tl-center tl-container-flex-block">
</div>
...
    `;

  constructor() { }

  ngOnInit(): void {
  }

}
