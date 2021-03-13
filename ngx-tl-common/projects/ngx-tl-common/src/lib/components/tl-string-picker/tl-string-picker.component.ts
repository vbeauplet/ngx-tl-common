import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

/**
 * Component to help selection of one or multiple elements among a list of strings
 * 
 * @author vbeauplet
 */
@Component({
  selector: 'tl-string-picker',
  host: { 
    '[class]' : 'this.size + " tl-margined tl-row-dir tl-vert-center tl-flex-block"',
    '[class.hor-left]' : 'this.alignment !== "center"'
    },
  templateUrl: './tl-string-picker.component.html',
  styleUrls: ['./tl-string-picker.component.scss']
})
export class TlStringPickerComponent implements OnInit, OnChanges {

  /**
   * Size of the String Picker container block. 
   * Shall fit tl-size system
   * tl-full by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Font size, in px
   * 10 by default
   */
  @Input() fontSize: number = 16;
  
  /**
   * Margin between each string picker lines, in px
   */
  @Input() elementMargin: number = 6;
  
  /**
   * Alignment of the proposals. May be 'left' or 'center' (default)
   */
  @Input() alignment: string = 'center';
  
  /**
   * Tells if only one string can be selected
   * False by default
   */
  @Input() singleSelection: boolean = false;
  
  /**
   * Only matters if the string picker runs in single selection mode
   * If this option is set to true and single selection too, selcted item cannot be unselected
   * At any time, there will be only one selected item
   * True by default (but single selection is set to false by default)
   */
  @Input() forceSelectOne: boolean = true;
  
  /**
   * List of all initial items among which to select
   * Mandatory, empty by default
   */
  @Input() initialItems: string[] = [];
  
  /**
   * List of initially selected items
   */
  @Input() initialSelectedItems: string[] = [];
  
  /**
   * Synchronize selected items with initial selected items input
   * It means if true anytime table provided as initialSelectedItems changes,
   * table of component selected item is updated accordingly.
   *
   * If false, initialSelectedItems are copied only once at component initialization and compoennt lives its life afterward
   *
   * False by default
   */
  @Input() synchrone: boolean = false;
  
  /**
   * Tells if list of proposed items is editable, which means items can be created via an input field
   */
  @Input() editable: boolean = false;
  
  /**
   * ID of the item creation input. 
   * Shall be documented if 2 or more editable string-pickers are on the same page
   */
  @Input() inputId: string = 'create-item-input-id';
  
  /**
   * Display spinner flag
   */
  @Input() displaySpinner: boolean = true;
  
  /**
   * Event that is raised when an item is clicked
   * String that is clicked is carried by the event
   */
  @Output() clickItem: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * Event that is raised when selection is changed
   * List of all selected items is carried by this event
   */
  @Output() selectItems: EventEmitter<string[]> = new EventEmitter<string[]>();
  
  /**
   * Event that is raised when an item is selected
   * Selected item is carried by this event
   */
  @Output() selectItem: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * Event that is raised when an item is unselected
   * Unselected item is carried by this event
   */
  @Output() unselectItem: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * Event that is raised when an item is created
   */
  @Output() createItem: EventEmitter<string> = new EventEmitter<string>();
  
  
  /**
   * Bindable list of items
   */
  public items: string[] = [];
  
  /**
   * Bindable selected items
   */
  public selectedItems: string [] = [];
  
  /**
   * Loading status of the spinner, telling if operations are running on server
   *
   * In this case, useful only if overriden (no confirmation waiting for inital value change is used yet)
   */
  public loadingStatus: number = -1;

  constructor() { }

  ngOnInit(): void {
    // Set initial items
    this.refreshFromInitialItems();
    
    // Set selected items
    this.refreshFromInitialSelectedItems();
  }
  
  ngOnChanges(): void {
    // React to any change on initial selected items only if component is synchrone
    if(this.synchrone){
      this.refreshFromInitialItems();
      this.refreshFromInitialSelectedItems();
    }
  }
  
  /**
   * Refreshes / Resets component from current value of the initialSelectedUsers value  
   */
  public refreshFromInitialSelectedItems() {
    this.selectedItems = [...this.initialSelectedItems];
  }
  
    /**
   * Refreshes / Resets component from current value of the initialSelectedUsers value  
   */
  public refreshFromInitialItems() {
    this.items = [...this.initialItems];
  }
  
  /**
   * Handle click on a proposed item
   */
  public onClickItem(item: string){
    // Emit the clickItem event
    this.clickItem.emit(item);
    
    // Switch item status: if selected, unselect it; if not select it
    this.switchItemStatus(item);
    
    // Emit the selctItems event
    this.selectItems.emit(this.selectedItems);
  }
  
  /**
   * Handle click on the add button to create an item:
   * - Create an item
   * - Select the newly created item
   */
  public onClickCreateButton(){
    // Retrieve value of the input
    const createItemInputValue = document.getElementById(this.inputId)['value'];
    
    if(createItemInputValue !== ''){
      
      // Emit item creation event
      this.unselectItem.emit(createItemInputValue);
      
      // Add to items
      this.addItemIfNotExisting(createItemInputValue);
      
      // Select element
      this.switchItemStatus(createItemInputValue);
      
      // Reset
      document.getElementById(this.inputId)['value'] = '';
    }
  }
  
  /**
   * Adds an item to the displayed ones, if not already there
   */
  public addItemIfNotExisting(item: string){
    if(!this.items.includes(item)){
      this.items.push(item);
    }
  }
  
  /**
   * Switch selected status of an item
   */
  protected switchItemStatus(item: string){
    
    // If only one selection is allowed
    if (this.singleSelection){
      
      // Retrieve selected item
      let selectedItem = '';
      if(this.selectedItems.length != 0){
        selectedItem = this.selectedItems[0];
      }
      
      // If item is the selected one
      if (selectedItem === item){
        
        // Unselect it if the 'force 1 selected item' option is not set
        if (!this.forceSelectOne){
          // Empty selected items array
          this.selectedItems = []
          
          // Emit unselectselect item event
          this.unselectItem.emit(item);
        }
        
        // If not, do nothing
        
      }
      
      // If the item was not the selected one
      else {
        // Update selected array with the new item
        this.selectedItems = [item]
        
        // Emit select item event
        this.selectItem.emit(item);
      }
    }
    
    // Else if multiple selections are allowed
    else{
      
      // If item is selected, unselect it
      if (this.selectedItems.includes(item)){
        const index = this.selectedItems.indexOf(item);
        this.selectedItems.splice(index, 1);
        
        // Emit unselect item event
        this.unselectItem.emit(item);
        
      }
      
      // Else if item is not, select it
      else {
        this.selectedItems.push(item);
        
        // Emit select item event
        this.selectItem.emit(item);
      }
      
    }
  }

}
