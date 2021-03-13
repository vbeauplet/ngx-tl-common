import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITlStep } from '../../interfaces/tl-step.interface';

@Component({
  selector: 'tl-stepper',
  host: { 
      '[class]' : 'this.size + " tl-margined tl-row-dir tl-vert-up tl-flex-block"'
  },
  templateUrl: './tl-stepper.component.html',
  styleUrls: ['./tl-stepper.component.scss']
})
export class TlStepperComponent implements OnInit {
   
  /**
   * Stepper initial steps
   * Use of an input property setter because if the stepper is synchrone, it shall react to any change on this input
   * If synchrone, any change on initial state shall be applied on component-binded steps
   */
  private _initialSteps: ITlStep[] = [];  
  @Input() set initialSteps(value: ITlStep[]) {
     this._initialSteps = value;
     if(this.synchrone){
       this.refreshStepsFromInitialValue();
     }
  }
  
  /**
   * Stepper initial current step index
   * Use of an input property setter because if the stepper is synchrone, it shall react to any change on this input
   * If synchrone, any change on initial current step index shall change component binadable currrent step
   */
  private _initialCurrentStepIndex: number = 0;  
  @Input() set initialCurrentStepIndex(value: number) {
    this._initialCurrentStepIndex = value;
    if(this.synchrone){
      
      // If the considerNextOnCurrentStepIncrement flag is set to true,
      // Check if modification of the current step index is an increment by 1
      if(this.considerNextOnCurrentStepIncrement && value == this.currentStepIndex + 1){
        
        // In this case, play the 'next' action insteadof only reachin the new step
        this.next();
      }
      
      // If the considerNextOnCurrentStepIncrement flag is set to true,
      // Check if modification of the current step index is an increment by 1
      if(this.considerResetOnCurrentStepZero && value == 0){
        
        // In this case, reset
        this.ngOnInit();
        
      }
      
      // Else simply reach new step
      else{
        this.refreshCurrentStepIndexFromInitialValue();
      }
      
    }
  }
  
  /**
   * Size of the stepper
   * 'tl-full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * SIze, in px, of the stepper dots
   */
  @Input() dotSize: number = 50;
  
  /**
   * tl-tyle of the stepper dots. May be tl-outlined, tl-neumorphic, tl-transparent, tl-glassmorphic...
   * tl-neumorphic by default
   */
  @Input() tlStyle: string = 'tl-neumorphic';
  
  /**
   * Tells if stepper shall be active, which means clicking on it can modify process state
   * True by default
   */
  @Input() active: boolean = true;
  
  /**
   * Tells a 'next' button shall be displayed
   * True by default
   */
  @Input() showNextButton: boolean = true;
  
  /**
   * If the synchrone flag is set to true, component reacts accordingly to any change of the initial step list
   * False by default
   */
  @Input() synchrone: boolean = false;
  
  /**
   * 
   * Tells if a 'next step' action shall be triggered in case the current step index input is incremented by 1
   * For example, if index is initially set to 2 and goes to 3, 'next' action is triggered: step 2 is now considereed as done and step 3 is set as step under focus
   *
   * Only work if component is synchrone (need to react to initial value change)
   */
  @Input() considerNextOnCurrentStepIncrement: boolean = false;
  
  /**
   * 
   * Tells if a 'reset' action shall be triggered in case the current step index input goes to 0
   *
   * Only work if component is synchrone (need to react to initial value change)
   */
  @Input() considerResetOnCurrentStepZero: boolean = false;
  
  /**
   * Tells if all previous steps shall be always consider as "done":<br>
   * - At component initialization time
   * - In case current index changes in a synchrone way
   *
   * Only work if component is synchrone (need to react to initial value change)
   */
  @Input() considerAllPreviousStepsAsDone: boolean = false;

  /**
   * Event that is raised when current step is changed
   * Carried payload is the name of the new current step
   */
  @Output() changeStep: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * Event that is raised when a step is completed
   * Carried payload is the name of the completed step
   */
  @Output() completeStep: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * Stepper bindable list of steps
   */
  public steps: ITlStep[] = [];
  
  /**
   * Stepper bindable curent step index
   */
  public currentStepIndex: number = 0;
  
  /**
   * Step max width
   */
  public stepMaxWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.refreshStepsFromInitialValue();
    this.refreshCurrentStepIndexFromInitialValue();
  }
  
  /**
   * Refreshes bindable steps list from initial steps list
   * Only works if component is synchrone
   */
  public refreshStepsFromInitialValue(){
    // Compute step max width
    let dotNumber:number = (this.showNextButton)?this._initialSteps.length+1:this._initialSteps.length;
    this.stepMaxWidth = 99/dotNumber;
    
    // Refresh steps (deep copy of the array)
    this.steps = [];
    this._initialSteps.forEach(val => this.steps.push(Object.assign({}, val)));
  }
  
  /**
   * Refreshes current step index from initial steps list
   * Only works if component is synchrone
   */
  public refreshCurrentStepIndexFromInitialValue(){
    
    // Reach step corresponding to initial value
    this.reachStep(this._initialCurrentStepIndex);
  }
  
  /**
   * Go to next step, completing current one
   */
  public next(){
    // Check it is possible
    if(this.steps.length > this.currentStepIndex + 1){
      
      // Change current step status
      this.steps[this.currentStepIndex].status = 2;
      
      // Emit complete event
      this.completeStep.emit(this.steps[this.currentStepIndex].name);
      
      // Reach next step
      this.reachStep(this.currentStepIndex + 1);
    }
    
    else if (this.steps.length == this.currentStepIndex + 1){
      
      // Change current step status
      this.steps[this.currentStepIndex].status = 2;
      
      // Emit complete event
      this.completeStep.emit(this.steps[this.currentStepIndex].name);
      
    }
  }
  
  /**
   * Reaches a particular step of the stepper, without completing current step
   */
  public reachStep(index: number){
      // Change current step
      this.currentStepIndex = index;
      
      // Change new step status if still not seen
      if(this.steps[this.currentStepIndex].status == undefined || this.steps[this.currentStepIndex].status == 0){
        this.steps[this.currentStepIndex].status = 1;
      }
      
      // Put all previous steps in 'done' state if the 'considerAllPreviousStepsAsDone' flag in set tot true
      if(this.considerAllPreviousStepsAsDone){
        for(let step of this.steps){
          if(this.steps.indexOf(step) < this.currentStepIndex){
            step.status = 2;
          }
          else{
            break;
          }
        }
      }
      
      // Emit change step
      this.changeStep.emit(this.steps[this.currentStepIndex].name);
  }
  
  /**
   * Handles click on a step
   */
  public onClickStep(index: number){
    if(this.active){
      this.reachStep(index);
    }
  }

}
