import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITlFormItem {
  id: string,
  type: string,
  label: string,
  optional?: boolean,
  icon?: string,
  validationFilter?: string,
  validationMessage?: string,
  initialValue?: any,
  ratio?:number,
  proposals?: any[]
}

export interface ITlFormButton {
  label: string,
  icon: string,
  color?: string,
  size?: string
}

export interface ITlForm {
  items: ITlFormItem[],
  button?: ITlFormButton,
  fallbackMessage?: string,
  fallbackRoute?: string
}

export interface ITlFormItemState {
  id: string,
  optional: boolean,
  status:number,
  value: any
}

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-form',
  host: { 
    '[class]' : 'this.size + " tl-col-dir tl-hor-center tl-flex-block"'
    },
  templateUrl: './tl-form.component.html',
  styleUrls: ['./tl-form.component.scss']
})
export class TlFormComponent implements OnInit {

  /**
   * Size, in the ngx-tl-common size system
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Border radius (Tl-br system) of the form items
   */
  @Input() itemsBorderRadius = 'tl-br-infinite';
  
    /**
   * Border radius (Tl-br system) of the button, if any
   */
  @Input() buttonBorderRadius = 'tl-br-infinite';
  
  /**
   * Style of the form items, in the ngx-tl-common style system
   */
  @Input() itemStyle: string = 'tl-secondary-style';
  
  /**
   * Secondary Style of the form, in the ngx-tl-common style system
   */
  @Input() togglerButtonStyle: string = 'tl-soft-transparent';
  
  /**
   * Style of the form popups (calendar, select list,...), in the ngx-tl-common style system
   */
  @Input() popupStyle: string = 'tl-glassmorphic';
  
  /**
   * Style of the chips, in the ngx-tl-common style system
   */
  @Input() chipsStyle: string = 'tl-soft-transparent';
  
  /**
   * Style of the button within form popups, in the ngx-tl-common style system
   */
  @Input() popupButtonStyle: string = 'tl-glassmorphic';

  /**
   * Form definition
   * Mandatory, undefined initially
   */
  @Input() form: ITlForm;
  
  /**
   * Tells if item validation shall be activated for all form
   */
  @Input() activateItemValidation: boolean = true;
  
  /**
   * Loading status of the submit button
   */
  @Input() submitButtonLoadingStatus: number = -1;
  
  /**
   * Event which is emitted when form value changes
   */
  @Output() changeForm: EventEmitter<ITlFormItemState[]> = new EventEmitter<ITlFormItemState[]>();
  
  /**
   * Event which is emitted when form button is clicked
   */
  @Output() submitForm: EventEmitter<ITlFormItemState[]> = new EventEmitter<ITlFormItemState[]>();
  
  /**
   * Current formValue
   */
  public formState: ITlFormItemState[] = [];
  
  /**
   * Tells if form is ok to submit, which means no un-optional field is missing
   */
  public formOk: boolean  = false;

  constructor() { }

  ngOnInit(): void {
    
    // Init form state
    for(let item of this.form.items){
      
      // Push initial state value
      this.formState.push({
          id: item.id,
          optional: item.optional,
          status: (item.type == 'toggler' || item.type == 'title' || item.type == 'chips')?1:0,
          value: this.getInitialValue(item)
        });
    }
  }
  
  /**
   * Checks form to see if form is valid and ok to submit
   */
  public check(){
    
    let tempFormOk: boolean = true;
    
    // If dynamic item validation is active
    if(this.activateItemValidation){
      
      // Browse through items
      for(let itemState of this.formState){
        
        // And check if its state is blocking to validate form
        if(itemState.status == 2 || (itemState.status == 0 && !itemState.optional)){
          tempFormOk = false;
          break;
        }
        
      }
    }
    
    // Else if no dynamic validation of items is active, just check mandatory elements have values
    else{
      
      // Browse through items
      for(let itemState of this.formState){
        
        // And check if its state is blocking to validate form
        if((itemState.value == undefined || itemState.value === '') && !itemState.optional){
          tempFormOk = false;
          break;
        }
        
      }
    }
    
    // Set new form validation status
    this.formOk = tempFormOk
  }
  
  /**
   * Submit form
   */
  public submit(){
    if(this.formOk){
      this.submitForm.next(this.formState);
    }
  }
  
  /**
   * Handles value change for  particular item
   */
  public onChangeValue(itemId: string, newValue: any){
    
    let itemState: ITlFormItemState = this.getState(itemId)
    
    // Change value on form state
    itemState.value = newValue;
    
    // Emit the change form event
    this.changeForm.next(this.formState);
    
    // If item validation is not enabled, a value change triggers a form check
    if(!this.activateItemValidation){
      this.check();
    }
  }
  
  /**
   * Handleds a change on the validation status of a form item
   */
  public onChangeStatus(itemId: string, newStatus: number){
    
    let itemState: ITlFormItemState = this.getState(itemId)
    
    // Change status of the item
    itemState.status = newStatus;
    
    // Trigger form check
    this.check();
  }
  
  /**
   * Gets the item state within form states corresponding to provided item ID
   * Null if not found
   */
  public getState(itemId: string): ITlFormItemState{
    for(let itemState of this.formState){
      if(itemState.id == itemId){
        return itemState;
      }
    }
    return null;
  }


  private getInitialValue(item: ITlFormItem): any{
    if(item.type == 'toggler'){
      if(item.initialValue == undefined){
        return false;
      }
    }
    return item.initialValue;
  }
}
