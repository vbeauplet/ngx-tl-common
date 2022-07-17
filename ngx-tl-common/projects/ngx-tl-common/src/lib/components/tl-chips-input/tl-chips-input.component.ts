import { Component, OnInit, Input, Output, EventEmitter, ViewChild  } from '@angular/core';
import { TlInputComponent } from '../tl-input/tl-input.component';

@Component({
  selector: 'tl-chips-input',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " " + this.borderRadius + " tl-row-dir tl-padded tl-vert-center tl-container-flex-block"',
      '[class.tl-hor-center]' : 'this.alignment == "center"',
      '[class.tl-hor-left]' : 'this.alignment == "left"'
    },
  templateUrl: './tl-chips-input.component.html',
  styleUrls: ['./tl-chips-input.component.scss']
})
export class TlChipsInputComponent implements OnInit {

  /**
   * TlInput component child
   */
  @ViewChild('chipInput') chipInput: TlInputComponent;

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
   * Alignment of chips and input within input container
   */
  @Input() alignment: string = 'left';
  
  /**
   * Style of the chips
   */
  @Input() chipsStyle: string = 'tl-soft-transparent';
  
  /**
   * List of initial chips
   */
  @Input() initialChips: string[] = [];
    
  /**
   * Placeholder of the inner input
   */
  @Input() inputPlaceholder: string = 'Add new';
  
  /**
   * Activate input validation via potential check filters
   * (if no check filters everything is accepted) 
   */
  @Input() inputValidationOn: boolean = false;
  
  /**
   * Potential check filters for the inputed string
   * Use standard filters: 'integer', 'number', 'date', 'password', 'no-space'
   * Or custom regular expressions
   */
  @Input() inputValidationFilters: string[] = [];
  
  /**
   * Message to display in case input validation fails
   * Undefined if no message shall be displayed
   */
  @Input() inputValidationMessage: string = undefined;
  
  /**
   * Event which is emitted when chip list changes
   */
  @Output() change: EventEmitter<string[]> = new  EventEmitter<string[]>();
  
    /**
   * Event which is emitted when a chip is added
   */
  @Output() add: EventEmitter<string> = new  EventEmitter<string>();
  
    /**
   * Event which is emitted when a chip is removed
   */
  @Output() remove: EventEmitter<string> = new  EventEmitter<string>();
  
  /**
   * List of currently selected chips
   */
  public chips: string[] = [];


  constructor() { }

  ngOnInit(): void {
    
    // Init chip list
    this.chips = [...this.initialChips];
  }
  
  /**
   * Adds a chip to chip list
   */
  public addChip(chip: string){
    
    // Check input is valid before proceeding
    if(!this.inputValidationOn || this.chipInput.validationStatus == 1){
      
      this.chips.push(chip);
      
      // Reset chip input
      this.chipInput.refreshFromInitialValue();
      
      
      // Emit the "change" and "add" event
      this.change.next(this.chips);
      this.add.next(chip);
    }
  }
  
  /**
   * Removes a chip from chip list
   */
  public removeChip(chip: string){
    this.chips = this.chips.filter(e => e !== chip);
    
    // Emit the "change" and "add" event
    this.change.next(this.chips);
    this.remove.next(chip)
  }

}
