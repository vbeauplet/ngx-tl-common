import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TlTogglerComponent } from '../tl-toggler/tl-toggler.component';

@Component({
  selector: 'tl-icon-miniature-toggler',
  templateUrl: './tl-icon-miniature-toggler.component.html',
  styleUrls: ['./tl-icon-miniature-toggler.component.scss']
})
export class TlIconMiniatureTogglerComponent extends TlTogglerComponent implements OnInit {
  
  /**
   * Icon when toggler is in 'off' state
   * Do not document if this is the same than in 'on' state
   */
  @Input() offIcon: string = this.icon;
  
  /**
   * Miniature height, in px
   * 50 by default
   */
  @Input() miniatureHeight: number = 50;
  
  /**
   * Miniature border radius, in px
   * 10 by default
   */
  @Input() borderRadius: number = 10;
  
  /**
   * Style of the miniature
   * Can be: tl-soft-transparent, tl-outlined, tl-neumorphic...
   * tl-soft-transparent by default
   */
  @Input() tlStyle: string = 'tl-soft-transparent'
  
  /**
   * Event that is raised when toggler is toggled on
   */
  @Output() toggleOn: EventEmitter<any> = new EventEmitter();
  
  /**
   * Event that is raised when toggler is toggled off
   */
  @Output() toggleOff: EventEmitter<any> = new EventEmitter();
  
  /**
   * Only if component is under a 'synchrone feedback' policy
   * Event that is raised when toggler is toggled on and confirmed-back by intial value change
   */
  @Output() toggleOnConfirmed: EventEmitter<any> = new EventEmitter();
  
  /**
   * Only if component is under a 'synchrone feedback' policy
   * Event that is raised when toggler is toggled off and confirmed-back by intial value change
   */
  @Output() toggleOffConfirmed: EventEmitter<any> = new EventEmitter();
  
  /**
   * Inner toggler component child
   */
  @ViewChild('innerToggler') innerToggler: TlTogglerComponent;

  /**
   * Dynamic icon background color
   */
  public dynamicBgColor: string = 'tl-neutral';
  
  constructor() {
    super()
  }

  ngOnInit(): void {
    (this.initialState)?this.dynamicBgColor = this.onBgColor:this.dynamicBgColor = this.offBgColor;
  }
  
  /**
   * Gets miniature background color from toggler status
   */
  public refreshBgColor() {
    setTimeout(() => {
      
      // Color computation
      if(this.innerToggler != undefined){
        if(this.innerToggler.togglerLoadingStatus != 0){
          if(this.innerToggler.targetState){
            this.dynamicBgColor = this.onBgColor;
          }
          else{
            this.dynamicBgColor = this.offBgColor;
          }
        }
        else{
          this.dynamicBgColor = 'tl-neutral';
        }
      }
  
    }, 10);
  }
    
}
