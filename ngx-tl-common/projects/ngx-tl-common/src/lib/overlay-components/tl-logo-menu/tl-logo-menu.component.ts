import { Component, OnInit, Input } from '@angular/core';
import { TlMenuService } from '../../services/tl-menu.service';

@Component({
  selector: 'tl-logo-menu',
  host: { 
      '[class]' : 'this.tlStyle + " tl-no-br tl-full tl-col-dir tl-hor-center tl-vert-center tl-container-flex-block"'
    },
  templateUrl: './tl-logo-menu.component.html',
  styleUrls: ['./tl-logo-menu.component.scss']
})
export class TlLogoMenuComponent implements OnInit {
  
  /**
   * Style of the menu, in the tl style system
   */
  @Input() tlStyle: string = 'tl-shadowed-soft-transparent';


  /**
   * Tells if there shoud be side decorators
   */
  @Input() hasSideDecorators: boolean = false;
  
  
  /**
   * Logo img src path. Mandatory
   */
  @Input() logoSrc: string ='';
  
  /**
   * Logo size, in px
   */
  @Input() logoSize: number = 120;
  
  /**
   * Style of the mobile menu
   */
  @Input() mobileMenuStyle ='gradient';
  
  /**
   * Logo index within list of menu items
   */
  public logoPosition: number = 0;
  
  constructor(
    public menuService: TlMenuService
  ) {}

  ngOnInit(): void {
    
    // Set configuration variables related to the choice of a menu
    document.documentElement.style.setProperty('--desktop-page-menu-padding-top', (this.logoSize + 65) + 'px');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-top', '30px');
    document.documentElement.style.setProperty('--desktop-page-menu-padding-left', '0px');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-left', '0px');
    document.documentElement.style.setProperty('--desktop-page-menu-padding-bottom', '0px');
    document.documentElement.style.setProperty('--mobile-page-menu-padding-bottom', '100px');
    
    // Positionning of logo
    this.logoPosition = Math.floor(this.menuService.menuItems.length / 2);
  }

}
