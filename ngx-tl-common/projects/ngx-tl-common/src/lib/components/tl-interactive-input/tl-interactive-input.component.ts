import { Component, OnInit, Input, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';

import { TlHelpersService } from '../../services/tl-helpers.service';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-interactive-input',
  host: {
      '[class]' : 'this.size + " tl-row-dir tl-vert-center tl-flex-block"'
    },
  templateUrl: './tl-interactive-input.component.html',
  styleUrls: ['./tl-interactive-input.component.scss']
})
export class TlInteractiveInputComponent implements OnInit {

  /**
   * Size of the interactive container. 'tl-full' by default
   */
  @Input() size: string = 'tl-full';

  /**
   * Placeholder input. Mandatory, shall be documented. Usually taken from modeld node value
   * Use alternative placehoder if not sure given value is set
   */
  @Input() placeholder: string;
  
  /**
   * Alterantive placeholder in case placeholder is null or empty.
   * Usually is a plain string that indicae what to do with this input
   */
  @Input() altPlaceholder: string;

  /**
   * Id of the input, in case custom. if not an uuid is used
   */
  @Input() inputId: string = '';
  
  /**
   * Text align property of the input. 'left' by default
   */
  @Input() inputTextAlign: string = 'left';
  
  /**
   * Label of the input, if any. May be undocumented for none
   */
  @Input() inputLabel: string = '';
  
  /**
   * Optional. Label width (css property). If not set, automatically adapt to content
   */
  @Input() inputLabelWidth: string = 'fit-content';
  
  /**
   * Input type
   * Text by default
   */
  @Input() inputType: string = 'text';
  
  /**
   * Loading status notified via a stateful spinner during potential update on sdb
   */
  @Input() sdbLoadingStatus = -1;
  
  /**
   * Tells if interactive input shall be inline, which means looking just like a piece of text identified with a pen
   * Label cannot be added if interactive input is inline
   */
  @Input() inline: boolean = false;

  /**
   * Output event for the component: change value
   * New value is the carried payload
   */
  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>();
  
  
  /**
   * Tells if the input of the interactive-input is currently in focus
   */
  public inputInFocus: boolean = false;

  constructor(
      private tlHelpersService: TlHelpersService
    ) { }

  ngOnInit(): void {
    // Compute input id if not provided
    if(this.inputId == ''){
      this.inputId = this.tlHelpersService.generateId();
    }
  }
  
  /**
   * Resets the component
   */
  public reset(){
    let element: any = document.getElementById(this.inputId);
    element.value = '';
    this.changeValue.next('');
  }
  
  /**
   * Triggered blurring input. Shall emit the blur event of the component with the input content, 
   * if this content is not null nore empty
   */
  public onBlurInput(event: any){
    let inputValue: string = '';
    if(event.srcElement != undefined){
      inputValue = event.srcElement.value;
    }
    else if(event.target != undefined){
      inputValue = event.target.value;
    }
    
    // Tell inut is not on focus anymore
    this.inputInFocus = false;
    
    // Emit change value event, if consistent
    if(inputValue != null && inputValue != ""){
      this.changeValue.emit(inputValue);
    }
  }
  
  public onFocusInput(){
    this.inputInFocus = true; 
  }
  
  /**
   * Handles the click on the edit markup
   * Shall focus the text input
   */
  public onClickEditMarkup(){
    if(!this.inputInFocus){
      document.getElementById(this.inputId).focus();
    }
  }
  
  /**
   * Handles the click on the edit markup when loading
   */
  public onClickEditMarkupWhenLoading(){
    // Do nothing
  }
  
  /**
   * Get placeholder to display
   */
  public getPlaceholder(): string {
    if (this.placeholder != null && this.placeholder !== '') {
      return this.placeholder;
    }
    return this.altPlaceholder;
  }

}
