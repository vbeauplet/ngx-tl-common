import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';
import { ITlFormItemState } from 'ngx-tl-common/lib/components/tl-form/tl-form.component';

@Component({
  selector: 'tls-form-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-form-view.component.html',
  styleUrls: ['./tl-form-view.component.css']
})
export class TlFormViewComponent implements OnInit {
  public htmlCode: string;
    
  public tsCode: string = ` 
  /**
   * Form validation button status
   */
  public buttonStatus: number = -1;
  
  /**
   * Submit sample form
   */
  public submitForm(formStates: ITlFormItemState[]){
    
    // Handle button status, if asynchronous and wanted
    this.buttonStatus = 0;

    // Retrieve form content
    let name = this.getState('batch-name', formStates).value;
    let favorite = this.getState('batch-favorite', formStates).value;
    let date = this.getState('batch-date', formStates).value;
    let category = this.getState('batch-category', formStates).value;
    let quantity = this.getState('batch-quantity', formStates).value;
    let state = this.getState('batch-state', formStates).value;
    let tags = this.getState('batch-tags', formStates).value;
    
    // Simulate asynchronous call to a server
    setTimeout(() => {
      this.buttonStatus = 1;
      this.alertService.raiseInfo("Ewample: submit form with value: name >> " + name + 
        ", favorite >> " + favorite + 
        ", date >> " + date.toDateString() + 
        ", category >> " + category + 
        ", quantity >> " + quantity + 
        ", tags >> " + tags)
        
        setTimeout(() => {
          this.buttonStatus = -1;
        }, 1000);
    }, 1000);
  }
  
  /**
   * Gets the item state within form states corresponding to provided item ID
   * Null if not found
   */
  private getState(itemId: string, states: ITlFormItemState[]): ITlFormItemState{
    for(let itemState of states){
      if(itemState.id == itemId){
        return itemState;
      }
    }
    return null;
  }
    `;
    
  public formTnterfaceTsCode: string = `
  // Form root
  
  interface ITlForm {
    items: ITlFormItem[],
    button?: ITlFormButton,
    fallbackMessage?: string,
    fallbackRoute?: string
  }
  
  // Form items
  
  interface ITlFormItem {
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
  
  // Form button
  
  interface ITlFormButton {
    label: string,
    icon: string,
    color?: string,
    size?: string
  } 
  
  // Form Events payload is given as item states
  
  interface ITlFormItemState {
    id: string,
    optional: boolean,
    status:number,
    value: any
  }
    `;
    
  /**
   * Form validation button status
   */
  public buttonStatus: number = -1;

  constructor(
      private alertService: TlAlertService,
      public componentPreferenceService: ComponentPreferencesService
    ) { }

  ngOnInit(): void {
    // Refresh configurable HTML code
    this.refreshHtmlCode();
    
    // Subscribe to any change on component sample style
    this.componentPreferenceService.styleSubject.subscribe(() => {
        this.refreshHtmlCode();
      });
  }
  
  /**
   * Refreshes HTML Code
   */
  public refreshHtmlCode(){
    
    this.htmlCode = `
  <tl-form
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [itemStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [itemsBorderRadius]="'tl-br-infinite'"
    [popupStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [buttonStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [chipsStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [activateItemValidation]="true"
    [validationInlineStyle]="true"
    [submitButtonLoadingStatus]="this.buttonStatus"
    [form]="{
        items: [
            {
              id: 'batch-name',
              type: 'input-text',
              label: 'Name',
              icon: 'ion-pricetag-outline'
            },
            {
              id: 'batch-category',
              type: 'select',
              label: 'Category',
              proposals: [{name: 'Sweet'}, {name: 'Salty'}, {name: 'Tasty'}],
            },
            {
              id: 'batch-favorite',
              type: 'toggler',
              label: 'Favorite'
            },
            {
              id: 'batch-date',
              type: 'date-picker',
              label: 'Date',
              validationFilter: 'date',
              validationMessage: 'Content shall be a date'
            },
            {
              id: 'batch-quantity',
              type: 'input-text',
              label: 'Quantity',
              icon: 'ion-speedometer-outline',
              validationFilter: 'integer',
              validationMessage: 'Content shall be a positive integer',
              initialValue: 45
            },
            {
              id: 'batch-state',
              type: 'select',
              label: 'State',
              proposals: [{name: 'To do'}, {name: 'In Progress'}, {name: 'Done'}],
              initialValue: 'To do'
            },
            {
              id: 'batch-tags',
              type: 'chips',
              label: 'Add tags',
              initialValue: ['Good', 'Fantastic']
            }
          ],
        button: {
          label: 'Create',
          icon: 'ion-send-outline'
        }
      }"
    [submitButtonLoadingStatus]="this.buttonStatus"
    (submitForm)="this.submitForm($event)">
  </tl-form>
    `;
  }
  
  /**
   * Submit sample form
   */
  public submitForm(formStates: ITlFormItemState[]){
    
    // Handle button status, if asynchronous and wanted
    this.buttonStatus = 0;

    // Retrieve form content
    let name = this.getState('batch-name', formStates).value;
    let favorite = this.getState('batch-favorite', formStates).value;
    let date = this.getState('batch-date', formStates).value;
    let category = this.getState('batch-category', formStates).value;
    let quantity = this.getState('batch-quantity', formStates).value;
    let state = this.getState('batch-state', formStates).value;
    let tags = this.getState('batch-tags', formStates).value;
    
    // Simulate asynchronous call to a server
    setTimeout(() => {
      this.buttonStatus = 1;
      this.alertService.raiseInfo("Ewample: submit form with value: name >> " + name + 
        ", favorite >> " + favorite + 
        ", date >> " + date.toDateString() + 
        ", category >> " + category + 
        ", quantity >> " + quantity + 
        ", tags >> " + tags)
        
        setTimeout(() => {
          this.buttonStatus = -1;
        }, 1000);
    }, 1000);
  }
  
  /**
   * Gets the item state within form states corresponding to provided item ID
   * Null if not found
   */
  private getState(itemId: string, states: ITlFormItemState[]): ITlFormItemState{
    for(let itemState of states){
      if(itemState.id == itemId){
        return itemState;
      }
    }
    return null;
  }
  
}
