import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-icon-dropdown',
  templateUrl: './tl-icon-dropdown.component.html',
  styleUrls: ['./tl-icon-dropdown.component.css']
})
export class TlIconDropdownComponent implements OnInit {

  /**
   * Size of the icon, in px
   */
  @Input() iconSize: number = 30;

  /**
   * Icon, in the tl-icon-system
   */
  @Input() icon: string = 'ion-ellipsis-horizontal-outline';
  
  /**
   * Icon, in the tl-icon-system, when the toggler is toggled on
   * If undefined, icon is the default 'icon'
   */
  @Input() iconOn: string = 'ion-ellipsis-horizontal';

  /**
   * Container style of the dropdown panel, expressed in the tl-style system
   */
  @Input() dropdownPanelStyle: string = 'tl-shadowed';
  
  /**
   * Position of the dropdown panel, when unwrapped
   */
  @Input() dropdownPanelPosition: string ='bottom-right';

  /**
   * Tells if dropdown is in active mode, which means it is displayed OR being displayed OR being undisplayed
   */
  public isActive: boolean = false;
  
  /**
   * Tells if dropdown container is wrapped or unwrapped
   */
  public isWrapped: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * Wraps the dropdown panel: handles both wrapping status and activation mode,
   * sequentially to handle transition
   */
  public closeDropdown(){
    this.isWrapped = true;
    setTimeout(() => {
        this.isActive = false;
      }, 200);
  }
  
  /**
   * Unwraps the dropdown panel: handles both wrapping status and activation mode,
   * sequentially to handle transition
   */
  public openDropdown(){
    setTimeout(() => {
        this.isActive = true;
        setTimeout(() => {
            this.isWrapped = false;
          }, 20);
      }, 10);
  }

}
