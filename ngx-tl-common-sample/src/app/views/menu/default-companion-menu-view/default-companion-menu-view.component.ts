import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-default-companion-menu-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './default-companion-menu-view.component.html',
  styleUrls: ['./default-companion-menu-view.component.css']
})
export class DefaultCompanionMenuViewComponent implements OnInit {


  public mobileMenuHtmlCode: string = `
<tl-mobile-menu
  *ngIf="..."> <!--  Use *ngIf for exmple in case menu is not displayed before authentification -->
</tl-mobile-menu>
    `;
    
  public searchMenuHtmlCode: string = `
<tl-search-menu
  [title]="'Ngx-tl-common'">
</tl-search-menu>
    `;    
    
  constructor() { }

  ngOnInit(): void {
  }

}
