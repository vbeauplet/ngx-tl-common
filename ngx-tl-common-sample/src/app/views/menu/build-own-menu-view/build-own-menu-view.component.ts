import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-build-own-menu-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './build-own-menu-view.component.html',
  styleUrls: ['./build-own-menu-view.component.css']
})
export class BuildOwnMenuViewComponent implements OnInit {

  public initMenuConfigurationVariables: string = `
  ngOnInit(): void {
    
    // Set configuration variables related to the choice of a search menu
    document.documentElement.style.setProperty('--desktop-page-menu-padding-top', '40px');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-top', '60px');
    document.documentElement.style.setProperty('--desktop-page-menu-padding-left', '30%');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-left', '0px');
    document.documentElement.style.setProperty('--desktop-page-menu-padding-bottom', '30px');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-bottom', '30px');
  }
    `;

  constructor() { }

  ngOnInit(): void {
  }

}
