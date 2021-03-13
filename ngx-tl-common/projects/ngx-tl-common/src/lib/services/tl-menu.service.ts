import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { ITlMenuItem } from '../interfaces/tl-menu-item.interface';

/**
 * Menu Service handle applciation menu lifecycle
 * Menu compoennts can be built relying on this service to provide menu infos and lifecycle handlers
 * 
 * This service shall be initialized at depending app level before it is used (init() service)
 *
 * @author vbeauplet
 */
@Injectable({
  providedIn: 'root'
})
export class TlMenuService {

  /**
   * Subject wrapper for the selected item, so that any change on the selected menu item 
   * can be subscribed and act over from any other depending compoennt or service
   */
  public selectedMenuItemSubject: Subject<ITlMenuItem> = new Subject<ITlMenuItem>();

  /**
   * Bindable list of menu items
   */
  public menuItems: ITlMenuItem[] = [];

  /**
   * Currently selected menu item
   */
  public selectedMenuItem: ITlMenuItem = null;
  
  /**
   * Wrapping flag for the application menu
   */
  public isWrapped: boolean = true;
  
  /**
   * Store an unwrapped menu item
   */
  public unwrappedMenuItem: ITlMenuItem = null;
  
  /**
   * Tells if service has been initialized
   */
  public isInitialized: boolean = false;
  
  constructor(
    private router: Router) { 
      // Subscribe to any route update
      router.events.subscribe((router:any) => {
        if(router.url != undefined){
          this.refreshFromRoute(router.url);
        }
      });
      
      // Get initial route
      this.refreshFromRoute(router.url);
  }
  
  /**
   * Refreshes the selected menu items from currently selected route
   */
  public refreshFromRoute(route:string){
    for(let item of this.menuItems){
      if(item.route === route){
        this.selectedMenuItem = item;
        break;
      }
      if(item.subItems != undefined){
        for(let subItem of item.subItems){
          if(subItem.route === route){
            this.selectedMenuItem = subItem;
            break;
          }
        }
      }
    }
  }
  
  /**
   * Initialize services with inut menu items
   */
  public init(menuItems: ITlMenuItem[]){
    this.menuItems = menuItems;
    this.isInitialized = true;
  }
  
  
  /**
   * Handles selection of a particular menu item
   */
  public selectMenuItem(menuItem: ITlMenuItem){
    
    // Emit selected item and emit associated subject
    this.selectedMenuItemSubject.next(this.selectedMenuItem);
    
    // If menu item has an associated route, route it
    if(menuItem.route != undefined){
      
      // Navigate to route      
      this.router.navigate([menuItem.route]);
      
      // Wrap if already unwrapped
      this.unwrappedMenuItem = null;
    }
    
    // If menu item has an associated subMenu, unwrap or wrap it, depending on its status
    if(menuItem.subItems != undefined){
      
      // Unwrap if not yet unwraped
      if(menuItem != this.unwrappedMenuItem){
        this.unwrappedMenuItem = menuItem;
      }
      
      // Wrap if already unwrapped
      else{
        this.unwrappedMenuItem = null;
      }
    }
  }
  
  /**
   * Increment badge number of a menu item
   */
  public incrementBadgeNumber(itemId: string){
    let item:ITlMenuItem = this.getItemById(itemId);
    if(item != null){
      let currentBadgeNumber: number = item.badgeNumber;
      item.badgeNumber = currentBadgeNumber++;
    }
  }
  
  /**
   * Sets badge number of a menu item
   * Null if none
   */
  public setBadgeNumber(itemId: string, badgeNumber: number){
    let item: ITlMenuItem = this.getItemById(itemId);
    if(item != null){
      item.badgeNumber = badgeNumber;
    }
  }
  
  public getItemById(itemId: string): ITlMenuItem{
    for(let menuItem of this.menuItems){
      if(menuItem.id == itemId){
        return menuItem;
      }
    }
    return null;
  }
  
}
