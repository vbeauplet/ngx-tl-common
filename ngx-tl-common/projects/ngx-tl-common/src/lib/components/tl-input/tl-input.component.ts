import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TlHelpersService } from '../../services/tl-helpers.service';

/**
 * Regular expression to use for decimal numbers filter
 */
const NUMBER_REGEXP: RegExp = new RegExp('^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$');

/**
 * Regular expression to use for integer number filters
 */
const INTEGER_REGEXP: RegExp = new RegExp('^[0-9]+$');

/**
 * Regular expression to use for decimal numbers filter
 */
const DATE_REGEXP: RegExp = new RegExp('^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$');

/**
 * Regular expression to use for password filter
 */
const PASSWORD_REGEXP: RegExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$');

/**
 * Regular expression to use for no-space filter
 */
const NOSPACE_REGEXP: RegExp = new RegExp('^\\S*$');


@Component({
  selector: 'tl-input',
  host: { 
    '[class]' : 'this.size'
    },
  templateUrl: './tl-input.component.html',
  styleUrls: ['./tl-input.component.scss']
})
export class TlInputComponent implements OnInit {

  /**
   * Size, in the ngx-tl-common size system
   * tl-full by default
   */
  @Input() size: string = 'tl-full';
  
    /**
   * Border radius of the front select component, expressed in the TL border radius system
   */
  @Input() borderRadius: string = 'tl-br-infinite';
  
  /**
   * Style of the form, in the ngx-tl-common size system
   */
  @Input() tlStyle: string = 'tl-neumorphic-inset-sharp';
  
  /**
   * Height of the input (px)
   * 50 by default
   */
  @Input() height: number = 50;
  
  /**
   * Input type
   */
  @Input() type: string = 'text';
  
  /**
   * Input placeholder
   */
  @Input() placeholder: string  = '';
  
  /**
   * Tells if component is synchrone, which means it reacts to any change on initial value
   */
  @Input() synchrone: boolean = false;
  
  /**
   * Initial value content of the input
   */
   private _initialValue: string = undefined;
  @Input() set initialValue(value: string) {
     this._initialValue = value;
     
     // Only deal with initial value hange if component is synchrone
     if(this.synchrone){
       if(this._initialValue != undefined){
         this.refreshFromInitialValue();
       }
     }
  }
  
  /**
   * Tells if plachoder shall linger whenever user has written an input
   */
  @Input() lingeringPlaceholder: boolean = false;
  
  /**
   * Potential icon to display within the input, undefined if none (default)
   */
  @Input() icon: string = undefined;
  
  /**
   * Activate input validation via potential check filters
   * (if no check filters everything is accepted) 
   */
  @Input() validationOn: boolean = false;
  
  /**
   * If set to true, proposes another style "inline" for the validation notice design
   */
  @Input() validationInlineStyle: boolean = false;
  
  /**
   * Potential check filters for the inputed string
   * Use standard filters: 'integer', 'number', 'date', 'password', 'no-space'
   * Or custom regular expressions
   */
  @Input() validationFilters: string[] = [];
  
  /**
   * Message to display in case validation fails
   * Undefined if no message shall be displayed
   */
  @Input() validationMessage: string = undefined;
  
  /**
   * Event which is emitted when enter key is pressed
   */
  @Output() pressEnter: EventEmitter<string> = new EventEmitter<string>(); 
  
  /**
   * Event which is emitted when value is changed
   */
  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>(); 
  
  /**
   * Event which is emitted when validation status is changed
   */
  @Output() changeValidationStatus: EventEmitter<number> = new EventEmitter<number>();
  
  /**
   * Event which is emitted when the input gets in focus
   */
  @Output() focusInput: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Curretn form value
   */
  public currentValue: string = '';
  
  /**
   * Tells if input is valid with regards to filters
   * 0 unchecked or no set
   * 1 ok
   * 2 ko
   */
  public validationStatus: number = 0;
  
  /**
   * Internal input ID
   */
  public internalId: string = '';
  

  constructor(
      private tlHelpersService: TlHelpersService
    ) { }

  ngOnInit(): void {
    
    // Set internal ID
    this.internalId = this.tlHelpersService.generateId();
    
    // Set initial value, if any
    if(this._initialValue != undefined){
      setTimeout(() => {
        this.refreshFromInitialValue();
      }, 50);
    }
  }
  
  /**
   * Refreshes the component from the provided initial value
   */
  public refreshFromInitialValue(){
    
    let input: any = document.getElementById(this.internalId);
    
    // If initial value is undefined
    if(this._initialValue == undefined){
      // Chrome and firefox
      input.setAttribute('value', undefined);
    
      // Others
      input.value = null;
      
      // Set checking status
      this.validationStatus = 0;
    }
    
    // Other initial values
    else {
      // Chrome and firefox
      input.setAttribute('value', this._initialValue);
    
      // Others
      input.value = this._initialValue;
      
      // Launch check
      this.check();
    }
    
    // Set current value
    this.currentValue = this._initialValue;
  }
  
  /**
   * Checks the current value against input filters and update input state accordingly
   */
  public check(){
    
    // Only check if validation is activated
    if(!this.validationOn){
      this.validationStatus = 0;
      return;
    }
    
    // Initialize ok status
    let tempStatus: number = 1;
    
    // Browse through filters and check
    for(let filter of this.validationFilters){
      
      // Check predefined filters
      if(filter == 'number'){
        if(!NUMBER_REGEXP.test(this.currentValue)){
          tempStatus = 2;
          break;
        }
      }
      else if(filter == 'integer'){
        if(!INTEGER_REGEXP.test(this.currentValue)){
          tempStatus = 2;
          break;
        } 
      }
      else if(filter == 'date'){
        if(!DATE_REGEXP.test(this.currentValue)){
          tempStatus = 2;
          break;
        }
      }
      else if(filter == 'password'){
        if(!PASSWORD_REGEXP.test(this.currentValue)){
          tempStatus = 2;
          break;
        }
      }
      else if(filter == 'nospace'){
        if(!NOSPACE_REGEXP.test(this.currentValue)){
          tempStatus = 2;
          break;
        }
      }
      
      // Else use regexp
      else {
        let regexpFilter: RegExp = new RegExp(filter)
        if(!regexpFilter.test(this.currentValue)){
          tempStatus = 2;
          break;
        }
      }
    }
    
    // Check if validation status has changed
    if(this.validationStatus != tempStatus){
      
      // Set new validation status
      this.validationStatus = tempStatus;
      
      // Emit change status eventwith new status
      this.changeValidationStatus.next(this.validationStatus);
    }
    
  }
  
  
  /**
   * Handles press on a keyboard key
   */
  public onPressKey(event: any){
    
    // Retrieve value
    let inputValue: string = event.target.value;
   
    // Set current value
    this.currentValue = inputValue;
   
    // Emit the change value event
    this.changeValue.next(this.currentValue);
    
    // Check value against filters, if any
    this.check();
  }
  
  /**
   * Handles press on the enter key
   */
  public onPressEnterKey(){
       
    // Emit the press enter event event
    this.pressEnter.next(this.currentValue);
  }
  
  /**
   * Focuses the input
   */
  public focus(){
    document.getElementById(this.internalId).focus();
  }

}
