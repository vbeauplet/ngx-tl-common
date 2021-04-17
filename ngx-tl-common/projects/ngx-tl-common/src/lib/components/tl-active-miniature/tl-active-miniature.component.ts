import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITlNamedIcon } from '../../interfaces/tl-named-icon.interface';
import { TlMiniatureComponent } from '../tl-miniature/tl-miniature.component';

@Component({
  selector: 'tl-active-miniature',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-flex-block"',
      '[class.tl-margined]' : 'this.margined'
    },
  templateUrl: './tl-active-miniature.component.html',
  styleUrls: ['./tl-active-miniature.component.scss']
})
export class TlActiveMiniatureComponent extends TlMiniatureComponent implements OnInit {

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
    super()
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
