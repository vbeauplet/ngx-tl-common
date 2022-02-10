import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITlNamedIcon } from '../../interfaces/tl-named-icon.interface';

@Component({
  selector: 'tl-active-miniature',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-flex-block"'
    },
  templateUrl: './tl-active-miniature.component.html',
  styleUrls: ['./tl-active-miniature.component.scss']
})
export class TlActiveMiniatureComponent implements OnInit {

  /**
   * URL of the minaiture photo.
   * Shall be provided
   */
  @Input() photoUrl: string = '';
  
  /**
   * Label of the miniature
   * Shall be provided
   */
  @Input() label: string = '';
  
  /**
   * Browse link, if any
   * Can be let undocumented if none
   */
  @Input() link: string = '';
  
  /**
   * tl-size of the miniature container
   */
  @Input() size: string = 'tl-near-full';
  
  /**
   * Miniature height, in px
   * 50 by default
   */
  @Input() height: number = 50;
  
  /**
   * Miniature border radius, in the tl-br system
   */
  @Input() borderRadius: string = 'tl-br-small';
  
  /**
   * Style of the miniature
   * Can be: tl-soft-transparent, tl-outlined, tl-neumorphic...
   * tl-soft-transparent by default
   */
  @Input() tlStyle: string = 'tl-soft-transparent'

  /**
   * Active icons to diplay in the miniature overlay, if any
   * Display of the active icon changes whether there is only one (all miniature is a button) or multiple icons (seprated buttons)
   */
  @Input() activeIcons: ITlNamedIcon[] = [];

  /**
   * Event to raise when clicking on an active icon
   * Payload is te name of the named icon
   */
  @Output() clickIcon: EventEmitter<string> = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }
  
  /**
   * Handles click on overlay
   */
  public onClickOverlay(){
    // Only does something if there is only one icon
    if(this.activeIcons.length != 1){
      return;
    }
    
    // If only one icon, raise its action
    this.clickIcon.next(this.activeIcons[0].name);
  }
  
  /**
   * Handles click on active icon
   */
  public onClickActiveIcon(activeIcon: ITlNamedIcon){
    
    // Redirect to output corresponding to action
    this.clickIcon.next(activeIcon.name);
    
  }

}
