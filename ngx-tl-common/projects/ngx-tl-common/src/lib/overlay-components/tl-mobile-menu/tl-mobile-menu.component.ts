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
   * Menu specific style. may be 'gradient', 'shadowed' or any other tl-system style
   * Gradient by default
   */
  @Input() menuStyle: string = 'gradient';
  
  /**
   * Size of the menu icons
   */
  @Input() iconSize: number = 40;
  
  /**
   * Icon bouncing ratio. Defualt is 1.6
   */
  @Input() iconBouncingRatio: number = 1.6;
  
  /**
   * Tells if menu label shall be shown
   */
  @Input() showLabel: boolean = true;
    
  /**
   * Tells if this menu is used only on mobile device
   */
   @Input() onlyMobile: boolean = false;
  
   /**
    * Source path of the logo to display, if any 
    * Undefined by default (in that case not displayed)
    */
   @Input() logoSrc: string;
   
     /**
    * Logo index within list of menu items, if any
    */
   public logoPosition: number = 0;
   
   constructor(
     public menuService: TlMenuService
   ) {}
 
   ngOnInit(): void {
     
     // Set configuration variables related to the choice of a search menu
     document.documentElement.style.setProperty('--mobile-page-menu-padding-top', '30px');
     document.documentElement.style.setProperty('--mobile-page-menu-padding-left', '0px');
     document.documentElement.style.setProperty('--mobile-page-menu-padding-bottom', '100px');
     if(!this.onlyMobile) {
       document.documentElement.style.setProperty('--desktop-page-menu-padding-top', '30px');
       document.documentElement.style.setProperty('--desktop-page-menu-padding-left', '100px');
       document.documentElement.style.setProperty('--desktop-page-menu-padding-bottom', '0px');
     }
     
     // Positionning of logo
     this.logoPosition = Math.floor(this.menuService.menuItems.length / 2);
   }
 
}
