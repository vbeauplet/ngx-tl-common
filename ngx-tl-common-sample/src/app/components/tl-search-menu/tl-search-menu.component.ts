import { Component, OnInit, Input } from '@angular/core';
import { TlMenuService, ITlMenuItem } from 'ngx-tl-common';
import { Router } from '@angular/router';

@Component({
  selector: 'tl-search-menu',
  host: { 
      '[class.wrapped]' : 'this.menuService.isWrapped'
    },
  templateUrl: './tl-search-menu.component.html',
  styleUrls: ['./tl-search-menu.component.css']
})
export class TlSearchMenuComponent implements OnInit {

  /**
   * Title of the application
   */
  @Input() title: string = undefined;



  constructor(
      private router: Router,
      public menuService: TlMenuService
    ) { }


  ngOnInit(): void { }
  
  /**
   * Handles click on a menu item
   */
  public onClickItem(item: any){
    let route = item.route
    if(route != undefined){
      this.router.navigate([route]);
    }
  }

}
