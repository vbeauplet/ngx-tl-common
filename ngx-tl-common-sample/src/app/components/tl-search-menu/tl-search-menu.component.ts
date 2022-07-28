import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TlMenuService } from 'ngx-tl-common';

@Component({
  selector: 'tls-search-menu',
  host: { 
      '[class.wrapped]' : 'this.menuService.isWrapped'
    },
  templateUrl: './tl-search-menu.component.html',
  styleUrls: ['./tl-search-menu.component.scss']
})
export class TlsSearchMenuComponent implements OnInit {

  /**
   * Title of the application
   */
  @Input() title: string = undefined;



  constructor(
      private router: Router,
      public menuService: TlMenuService
    ) { }


  ngOnInit(): void {
    
    // Set configuration variables related to the choice of a search menu
    document.documentElement.style.setProperty('--desktop-page-menu-padding-top', '60px');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-top', '60px');
    document.documentElement.style.setProperty('--desktop-page-menu-padding-left', '30%');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-left', '0px');
    document.documentElement.style.setProperty('--desktop-page-menu-padding-bottom', '30px');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-bottom', '30px');
  }
  
  /**
   * Handles click on the title
   */
  public onClickTitle(){
    
    // Go to root route
    this.router.navigate(['/']);
  }
  
  /**
   * Handles click on a menu item
   */
  public onClickItem(item: any){
    
    // Go to route
    let route = item.route
    if(route != undefined){
      this.router.navigate([route]);
      
      // Wrap menu
      this.menuService.isWrapped=true;
    }
  }

}
