import { Component, OnInit, OnChanges, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

import { ITlSelectProposal } from '../../interfaces/tl-select-proposal.interface';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-select',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-flex-block"'
    },
  templateUrl: './tl-select.component.html',
  styleUrls: ['./tl-select.component.css']
})
export class TlSelectComponent implements OnInit {

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
   * Style of the 'select choices' pop-up
   * tl-neumorphic by default
   */
  @Input() selectStyle: string = 'tl-neumorphic';
  
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
  

  constructor() { }

  ngOnInit(): void {
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
    }
  }
  
  /**
   * Handles click on front
   */
  public onClickFront(){
    
    // If component was not in 'selection' mode, emit the 'unwrap' event
    if(!this.isSelecting){
      this.unwrap.next();
    }
    
    // Anyway change selection status
    this.isSelecting = ! this.isSelecting;
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
    this.isSelecting = false;
  }
  
  /**
   * Handles click on reset
   */
  public onReset(){
    this.selectedProposal = null;
    this.targetSelectedProposal = null;
    this.isSelecting = false;
    this.reset.next();
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
