import { Component, OnInit, OnChanges, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ITlSelectProposal } from '../../interfaces/tl-select-proposal.interface';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-select',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-flex-shrink tl-flex-block"'
    },
  templateUrl: './tl-select.component.html',
  styleUrls: ['./tl-select.component.scss']
})
export class TlSelectComponent implements OnInit {

  /**
   * Host binding needed to control relative position (or not) of the host
   */
  @HostBinding('style.position') position = 'initial';

  /**
   * Proposals
   */
  @Input() proposals: ITlSelectProposal[] = []

  /**
   * Size of the stepper
   * 'tl-full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Border radius of the front select component, expressed in the TL border radius system
   */
  @Input() borderRadius: string = 'tl-br-infinite';
  
  /**
   * Height CSS property of the "front" of the select component, that contains the placeholder or selected option
   * 'auto' by default
   */
  @Input() height: string = 'auto';


  /**
   * Style of the "front" of the select component, that contains the placeholder or selected option
   * tl-no-style by default
   */
  @Input() tlStyle: string = 'tl-no-style';

  /**
   * Style of the 'select choices' pop-up
   * tl-neumorphic by default
   */
  @Input() optionPanelStyle: string = 'tl-neumorphic';
  
  /**
   * Initial selected proposal, if any
   * Undefined by default
   */
  @Input() initialSelectedProposal: ITlSelectProposal = null;
  
  /**
   * Placeholder of the select. When 'none' is the acitve option
   */
  @Input() placeholder: string = 'None';
   
  /**
   * Tells if the select shall be synchrone, 
   * which means that an initial state change changes the component state
   */
  @Input() synchrone: boolean = false;
  
  /**
   * Tells if the actual component state shall be driven by the initial state.
   * In this case, a new 'selectProposal' event (clicking ona proposal) shall therefore be confirmed by the consistent 'initialSelectedProposal' property modification
   * 
   * In other words, if component state modification is asked, component remains in transitory state until initial state reaches to current state
   *
   * False by default
   *
   * /!\ Warning: Component can be either 'synchrone', 'synchroneFeedback' (or none), but not the 2!
   */
  @Input() synchroneFeedback: boolean = false;
  
  /**
   * Tells if proposals are being loaded
   * False by default
   */
  @Input() areProposalsLoading: boolean = false;
  
  /**
   * Tells if component front shall be used as the positionning root of the option panel
   * True by default, do not change is tl-select is used as is
   * If set to false, do not forget to set one of the containing block as position root with position: relative
   */
  @Input() isPositionningRoot = true;
  
  /**
   * Text Align of the selected item within front
   * Center by default
   */
  @Input() textAlign: string = 'center';
  
  /**
   * Activate select input validation
   */
  @Input() validationOn: boolean = false;
  
  /**
   * Event that is emitted when component is being unwrapped (selection mode starts)
   */
  @Output() unwrap: EventEmitter<ITlSelectProposal> = new EventEmitter<ITlSelectProposal>();
  
  /**
   * Event which is emmited in case a new proposal has been selected
   */
  @Output() selectProposal: EventEmitter<ITlSelectProposal> = new EventEmitter<ITlSelectProposal>();
  
  /**
   * Event which is emmited in case a proposal selection has been feedback-confirmed
   * Only useful is component is feedback synchrone
   */
  @Output() selectProposalConfirmed: EventEmitter<ITlSelectProposal> = new EventEmitter<ITlSelectProposal>();
  
  /**
   * Event which is emmited in case selkect is reseted
   */
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  
   /**
   * Event which is emitted when validation status is changed
   */
  @Output() changeValidationStatus: EventEmitter<number> = new EventEmitter<number>();
  
  /**
   * Currently selected proposal. Undefined by default
   */
  public selectedProposal: ITlSelectProposal = null;
  
  /**
   * Target selected proposal, which is proposal that is targetted to be the selected one.
   * Only useful if the component is synchrone feedback
   * In other case, target proposal and actually selected one are the same
   */
  public targetSelectedProposal: ITlSelectProposal = null;
  
  /**
   * Synchronous feedback loading status. Only used if compoennt is feedback-synchroned
   */
  public feedbackLoadingStatus: number = -1;
  
  /**
   * Tells if user is in "selecting proposal" mode
   */
  public isSelecting: boolean = false;
  
  /**
   * Tells if option panel is wrapped
   * Not redundant with the 'isSelecting' flag as it helps handling transition:
   * - In 'wrapped' mode, options panel is upper and transparent
   */
  public isWrapped: boolean = true;
  
  /**
   * Validation status of the select input
   * 0 unchecked or no set
   * 1 ok
   * 2 ko
   */
  public validationStatus: number = 0;
  

  constructor() { }

  ngOnInit(): void {
    if(this.isPositionningRoot){
      this.position = 'relative';
    }
    
    // Init from initial values
    this.init()
  }
  
  
  ngOnChanges(): void {      
    
    // Only act if selected proposal has changed
    if(this.checkEquals(this.initialSelectedProposal, this.selectedProposal)){
      return;
    }
    
    // In case component is 'synchrone'
    if(this.synchrone){
      
      // Re-init from initial value
      this.init();
      
      // Emit selectProposal event
      this.selectProposal.next(this.selectedProposal);
    }
   
    // In case component is 'feedback synchrone'
    else if(this.synchroneFeedback){
      
      // If initial state meets target state
      if(this.checkEquals(this.initialSelectedProposal, this.targetSelectedProposal)){
        
        // Set actual component state from new target
        this.selectedProposal = Object.assign({}, this.targetSelectedProposal);
        
        // Emit ''select confirmed'' event
        this.selectProposalConfirmed.next(this.selectedProposal);
        
        // Change feedback loading status
        this.feedbackLoadingStatus = 1;
        setTimeout(() => {
          this.feedbackLoadingStatus = -1;
        }, 2000);
      }
      
      // If initial state does not meet target state (initial state has changed)
      else{
        this.init();
      }
    }
    
    
  }
  
  /**
   * Initialize component from initial values
   */
  public init(){
    if(this.initialSelectedProposal != null){
      // Set selected proposal from input (hard clone)
      this.selectedProposal = Object.assign({}, this.initialSelectedProposal);
      this.targetSelectedProposal = Object.assign({}, this.initialSelectedProposal);
      this.feedbackLoadingStatus = -1;
      this.validationStatus = 1;
      this.changeValidationStatus.next(this.validationStatus);
    }
  }
  
  /**
   * Wraps the options panel: handles both wrapping status and selection mode,
   * sequentially to handle transition
   */
  public doWrap(){
    this.isWrapped = true;
    setTimeout(() => {
        this.isSelecting = false;
      }, 200);
  }
  
  /**
   * Unwraps the options panel: handles both wrapping status and selection mode,
   * sequentially to handle transition
   */
  public doUnwrap(){
    this.isSelecting = true;
    setTimeout(() => {
        this.isWrapped = false;
      }, 20);
  }
  
  /**
   * Handles click on front
   */
  public onClickFront(){
    
    // If component was not in 'selection' mode, emit the 'unwrap' event and unwrap
    if(!this.isSelecting){
      
      // Emit event
      this.unwrap.next();
      
      // Unwrap
      this.doUnwrap();
    }
    
    // If component is in selection mode, wraps
    else{
      this.doWrap();
    }
  }
  
  /**
   * Handles click outside of the option panel when it is displayed
   */
  public onClickOutsideOptionPanel(){
    if(!this.isWrapped){
      this.doWrap();
    }
  }
  
  /**
   * Handles proposal selection
   */
  public onSelectProposal(proposal: ITlSelectProposal){
    
    /**
     * Do nothing if the is the currently selected proposal
     */
    if(this.checkEquals(proposal, this.selectedProposal)){
      return;
    }
    
    if(!this.synchroneFeedback){
      
      // Set new selected proposal
      this.targetSelectedProposal = proposal;
      this.selectedProposal = proposal
    }
    else
    {
      // If component is synchrone feedback, change target state and wait till initial state meets target one before the actual is changed
      this.targetSelectedProposal = proposal;
      this.feedbackLoadingStatus = 0;
    }
    
    // Emit select event
    this.selectProposal.next(proposal);
    
    // Change validation status and raise status change event (if validation is on)
    if(this.validationOn) {
      this.validationStatus = 1;
      this.changeValidationStatus.next(this.validationStatus);
    }
    
    // Wrap
    this.doWrap();
  }
  
  /**
   * Handles click on reset
   */
  public onReset(){
    this.selectedProposal = null;
    this.targetSelectedProposal = null;
    this.doWrap();
    this.reset.next();
    
    // Additionaly change validation status and raise status change event (if validation is on
    if(this.validationOn) {
      this.validationStatus = 2;
      this.changeValidationStatus.next(this.validationStatus);
    }
  }
  
  /**
   * Checks if 2 select proposals are the same
   */
  public checkEquals(proposal1: ITlSelectProposal, proposal2: ITlSelectProposal): boolean{
    if(proposal1 == null || proposal2 == null){
      return proposal1 == null && proposal2 == null;
    }
    return proposal1.name == proposal2.name;
  }

}
