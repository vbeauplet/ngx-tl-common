import { Component, OnInit, Input } from '@angular/core';

import { TlMenuService } from '../../services/tl-menu.service';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-mobile-menu',
  host: { 
      '[class]' : 'this.menuStyle'
    },
  templateUrl: './tl-mobile-menu.component.html',
  styleUrls: ['./tl-mobile-menu.component.scss']
})
export class TlMobileMenuComponent implements OnInit {

  /**
   * Menu specific style. may be 'gradient' or 'shadowed'
   * Gradient by default
   */
  @Input() menuStyle: string = 'gradient';
  
  /**
   * Size of the menu icons
   */
  @Input() iconSize: number = 40;
  
  constructor(
    public menuService: TlMenuService
  ) { }

  ngOnInit(): void {}

}
