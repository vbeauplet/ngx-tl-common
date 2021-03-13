import { Component, OnInit } from '@angular/core';
import { TlMenuService } from 'ngx-tl-common';

@Component({
  selector: 'tl-search-menu',
  host: { 
      '[class.wrapped]' : 'this.menuService.isWrapped'
    },
  templateUrl: './tl-search-menu.component.html',
  styleUrls: ['./tl-search-menu.component.css']
})
export class TlSearchMenuComponent implements OnInit {

  constructor(public menuService: TlMenuService
  ) { }


  ngOnInit(): void {
  }

}
