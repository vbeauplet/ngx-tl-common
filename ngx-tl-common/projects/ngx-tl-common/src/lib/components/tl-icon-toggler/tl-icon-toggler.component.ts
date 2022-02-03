import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tl-icon-toggler',
  templateUrl: './tl-icon-toggler.component.html',
  styleUrls: ['./tl-icon-toggler.component.scss']
})
export class TlIconTogglerComponent implements OnInit {
  
  /**
   * Size of the square icon, in px
   */
  @Input() size: number = 40;
  
  /**
   * Initial state of the icon toggler
   * Use of an input property setter to handle initial value change if synchrone state is set
   */
  private _initialState: boolean = false;
  @Input() set initialState(value: boolean) {
     this._initialState = value;
     
     // Only deal with initial value hange if component is synchrone
     if(this.synchrone){
       if(this._initialState){
         this.bounceOn();
       }
       else{
         this.bounceOff();
       }
     }
  }
  
  /**
   * Accentuation color of the icon when toggled on
   */
  @Input() color: string = 'tl-outline';

  /**
   * Icon, in the tl-icon-system
   */
  @Input() icon: string = 'tl-ion-heart';
  
  /**
   * Icon, in the tl-icon-system, when the toggler is toggled on
   * If undefined, icon is the default 'icon'
   */
  @Input() iconOn: string = undefined;

  /**
   * Bounding ratio
   * 1.8 by default
   */
  @Input() bouncingRatio: number = 1.8;
  
  /**
   * Tells if component is synchrone, which means reacts to any inital state change
   */
  @Input() synchrone: boolean = false;
  
  /**
   * Prevents click event and action
   */
  @Input() unclickable: boolean = false;
  
  /**
   * Event that is raised when toggler is toggled on
   */
  @Output() toggleOn: EventEmitter<any> = new EventEmitter();
  
  /**
   * Event that is raised when toggler is toggled off
   */
  @Output() toggleOff: EventEmitter<any> = new EventEmitter();
  
  /**
   * Event that is raised when toggler is toggled
   * Carries the new state as payload
   */
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  
  /**
   * State of the toggler
   */
  public state: boolean;
  
  /**
   * Flag to tell if 'off' icon is bounced
   */
  public iconOffBounced: boolean;

  constructor() {
  }
  
  ngOnInit(): void {
    this.state = this._initialState;
  }
  
  /**
   * Handles bounce click event
   */
  public bounce(){
    
    if(!this.unclickable){
      
      // If toggler is in "off" state
      if(!this.state){
        this.bounceOn();
      }
      
      // If toggler is in "on" state
      else{
        this.bounceOff();
      }
      
    }
    
  }
  
  /**
   * Bounces on the icon toggler
   */
  public bounceOn(){
    this.state = true;
    this.toggleOn.next();
    this.toggle.next(true);
    this.iconOffBounced = true;
    setTimeout(() => {
        this.iconOffBounced = false;
      }, 500);
  }
  
  /**
   * Bounces off the icon toggler
   */
  public bounceOff(){
    this.state = false;
    this.toggleOff.next();
    this.toggle.next(false);
  }
}
