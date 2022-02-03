import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-toggler',
  host: { 
      '[class]':'this.size + " tl-vert-center tl-hor-center tl-flex-block"',
      '[class.tl-col-dir]':'this.labelPosition === "bottom"',
      '[class.tl-row-dir]':'this.labelPosition === "right"'
    },
  templateUrl: './tl-toggler.component.html',
  styleUrls: ['./tl-toggler.component.scss']
})
export class TlTogglerComponent implements OnInit, OnChanges {

  /**
   * Height, in px, of the toggler
   */
  @Input() height: number = 30;
  
  /**
   * Size, in px, of the toggler
   * tl-initial-width by default
   */
  @Input() size: string = 'tl-initial-width';
  
  /**
   * Style of the container, in the tl style system
   */
  @Input() containerStyle: string = 'tl-neumorphic-inset-sharp';
  
  /**
   * Style of the mouving part, in the tl style system
   */
  @Input() buttonStyle: string = 'tl-neumorphic-dome';
  
  /**
   * Ratio between container height and button height
   */
  @Input() buttonContainerRatio: number = 1;

  /**
   * Icon of the toggler. None if not documented
   */
  @Input() icon: string = '';
  
  /**
   * Icon color, 'main' by default
   */
  @Input() color: string = 'main';
  
  /**
   * Toggler button margin
   * 10 by default
   */
  @Input() margin: number = 10;
   
  /**
   * Initial state of the toggler
   * false by default
   */
  @Input() initialState: boolean = false;
   
  /**
   * Tells if the toggler shall be synchrone, 
   * which means that an initial state change changes the toggler state
   */
  @Input() synchrone: boolean = false;
  
  /**
   * Tells if the toggler shall follow the initial state.
   * In this case, a 'toggle' event shall therefore be confirmed by the consistent 'initialState' property modification
   * 
   * In other words, if toggler state modification is asked, toggler remains in transitory state until initial state reaches to current state
   *
   * False by default
   *
   * /!\ Warning: Component can be either 'synchrone', 'synchroneFeedback' (or none), but not the 2!
   */
  @Input() synchroneFeedback: boolean = false;
  
  /**:
   * Toggler lable, if any
   * Let undocumented if none
   */
  @Input() label: string = '';
   
  /**
   * Label position, if any
   * May be 'right' of 'bottom'
   * Right by default
   */
  @Input() labelPosition: string = 'right';
  
  /**
   * Toggler background color when the target state is on (set to true)
   * May be 'success', 'failure', 'neutral', 'outline'...
   * Let empty if none
   */
  @Input() onBgColor: string = '';
  
  /**
   * Toggler background color when the target state is off (set to false)
   * May be 'success', 'failure', 'neutral', 'outline'...
   * Let empty if none
   */
  @Input() offBgColor: string = '';
  
  /**
   * Toggler background color when the toggler is loading
   * May be 'success', 'failure', 'neutral', 'outline'...
   * Let empty if none
   */
  @Input() loadingBgColor: string = '';
  
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
   * Toggler target state, initially set to initial state
   */
  public targetState: boolean
   
  /**
   * Loading status of the toggler
   */   
  public togglerLoadingStatus: number = -1;
   
  constructor() {
  }

  ngOnInit(): void {
    // Init from initial values
    this.init()
  }
  
  
  ngOnChanges(): void {
    
    // In case component is 'synchrone'
    if(this.synchrone){
      
      // Re-init from initial value
      this.init();
      
      // Emit toggle event
      (this.targetState)?this.toggleOn.next():this.toggleOff.next();
    }
   
    // In case component is 'feedback synchrone'
    else if(this.synchroneFeedback){
      
      // If initial state meets target state
      if(this.targetState == this.initialState){
                
        // Emit ''toggle confirmed'' event
        (this.targetState?this.toggleOnConfirmed:this.toggleOffConfirmed).next();
        
        // Change loading status
        this.togglerLoadingStatus = 1;
        
        setTimeout(() => {
          this.togglerLoadingStatus = -1;
        }, 2000);
      }
      
      // If initial state does not meet target state (initial state has changed)
      else{
        this.init();
      }
    }
  }
  
  /**
   * Initialize toggler from initial values
   */
  public init(){
    this.targetState = this.initialState;
  }
  
  /**
   * Handles click on toggler
   */
  public onClickToggler(){
    
    // Toggle target state
    this.targetState = !this.targetState;
    
    // Emit toggle event
    (this.targetState)?this.toggleOn.next():this.toggleOff.next();
    
    // If their need a synchrone feedback, tell it is loading until initial state meet the target one
    if(this.synchroneFeedback && this.targetState != this.initialState){
      this.togglerLoadingStatus = 0;
    }
  }
}
