import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sorter } from './sorter';
import { ITlNamedIcon } from 'ngx-tl-common';

/**
 * Column specification for the tree component.
 * Provided column spec shall follow this interface
 */
export interface IColSpec {
  fieldName: string;
  title: string;
  size: number; // In fr;
  sortable?: boolean; // Tell if sortable. undefined means false
  contentHorizontalAlign?: string; // May be right, left or center. Left by default
  contentVerticalAlign?: string; // May be top or center. Top buy default
  contentTextAlign?: string; // CSS text align property for cell content. left by default
  editable: boolean;
  editionType?: string; // May be toggler, select, input-text, date-picker
  editionPlaceholder?: string[]; // String proposals in case of a select or input edition type
  editionProposals?: any[]; // String proposals in case of a select edition type
  editionIcon?: string;
  hide?: boolean;
}

/**
 * Specification of a Selection action
 */
export interface ITlSelectionAction {
  actionId: string,
  selectedItems: any[]
}


/**
 * Specification of a Table value
 */
export interface ITableValue{
  item: any,
  fieldName: string,
  value: any
}

@Component({
  selector: 'tl-table',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-hor-left tl-flex-block"' 
  },
  templateUrl: './tl-table.component.html',
  styleUrls: ['./tl-table.component.css']
})
export class TlTableComponent implements OnInit {

  /**
   * Provided table data
   */
  @Input() data: any[] = [];
  
  /**
   * Binded date Might be filter/sorted/... by user without affecting initial source data
   */
  @Input() bindedData: any[] = []
  
  /**
   * Actually displayed data considering current page (pagination applied to bindedData)
   */
  @Input() displayedData: any[] = [];
  
  /**
   * Size of the table
   * 'tl-full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Name of the field that uniquely identifies an item among others
   * 'name' by default
   */
  @Input() idFieldName: string = 'name';
  

  /**
   * List of all columns describing properties to be displayed within for each node item
   */
  @Input() columns: IColSpec[] = [];

  /**
   * Initial value content of the input
   */
  public _selectionMode: boolean = false;
  @Input() set selectionMode(value: boolean) {
     this.toggleSelectionMode(value);
  }
  
  /**
   * Max number of items per pages
   * Let undefined if no pages
   */
  @Input() maxPerPage: number = undefined;
  
  /**
   * Style of the form input containers (input, toggler, select, ...) in the tl-style system
   */
  @Input() formInputStyle: string = 'tl-soft-transparent';
  
  /**
   * Style of the dropdowns used in the frame of this component
   */
  @Input() dropdownStyle: string = 'tl-shadowed';
  
  /**
   * Style of the dropdowns used in the frame of this component
   */
  @Input() togglerButtonStyle: string = 'tl-sharp-transparent';
  
  /**
   * Button container ratio of the togglers
   */
  @Input() togglerButtonContainerRatio: number = 1;
  
  /**
   * Style of the dropdowns used in the frame of this component
   */
  @Input() popupCardStyle: string = 'tl-bodylike';
  
  /**
   * Tells if rows can be clicked to be selected
   */
  @Input() clickRowToSelect: boolean = false;
  
  /**
   * Actions avalaible at item selection stage
   */
  @Input() selectionActions: ITlNamedIcon[] = [];
  
  /**
   * Loading status of the table in case a table processing shall be displayed to user via the table spinner
   */
  @Input() loadingStatus: number = -1;
  
  /**
   * Events which is emitted when a table value is updated via a table input
   */
  @Output() changeValue: EventEmitter<ITableValue> = new EventEmitter<ITableValue>();
  
  /**
   * Event hich is emitted when selection changes
   */
  @Output() select: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  /**
   * Event which is triggered in case of an action over selected items
   */
  @Output() actOnSelectedItems: EventEmitter<ITlSelectionAction> = new EventEmitter<ITlSelectionAction>();
  
  
  /**
   * Current page
   */
  public currentPage: number = 1;
  
  /**
   * Number of pages, computed at pagination time
   * Stay undefined if no pages
   */
  public numberOfPages: number = undefined;

    /**
   * CSS grid property concatenated column sizes
   */
  public gridTemplateColumns: string = '';

  /**
   * Flag to tell if column configuration popup shall be displayed
   */
  public displayColumnConfigurationPopup: boolean = false;
  
  /**
   * Map of selection status for all items
   */
  public selectionMap: Map<any, boolean>  = new Map<any, boolean>();
  
  /**
   * Current state of the 'clickRowToSelect' state
   */
  public currentClickRowToSelect: boolean = false;

  constructor() {}

  ngOnInit() {
    
    // Initialize binded data
    this.bindedData = [... this.data];
    
    // Paginate, if needed
    this.paginate(1);
    
    // Set column 'hide' porperty if not done yet
    for(let column of this.columns){
      if(column.hide == undefined){
        column.hide = false;
      }
    }
    
    // Compute gridTemplateColumns at init time
    this.gridTemplateColumns = this.concatenateColumnSizes();
    
    // Initialize currentClickRowToSelect state
    this.currentClickRowToSelect = this.clickRowToSelect;
    
    // Initialize selection map
    this.resetSelectionMap();
    
  }
  
  /**
   * Concatenate the column size to compute the value of the grid-template-columns css property of a row
   */
  public concatenateColumnSizes(): string {
    
    let sizes: string = '';
    
    // If selection mode is one, add selection bullets
    if(this._selectionMode){
      sizes = '30px ';
    }
    
    // Columns
    for (const column of this.columns){
      if(!column.hide){
        sizes += ' ' + column.size + 'fr';
      }
    }
    
    return sizes;
  }
  
  /**
   * Set the displayedData from bindedData to fit selected page
   */
  public paginate(page: number){
    
    // If pagination is not enabled, displayed all binded data
    if(this.maxPerPage == undefined){
      this.displayedData = this.bindedData;
    }
    
    
    
    // If pagination is enabled 
    else{
      
      // Set current page
      this.currentPage = page;
      
      // Compute number of pages and set 
      this.numberOfPages = Math.ceil(this.bindedData.length /this.maxPerPage)
      
      // Display only items that fit page number
      this.displayedData = [...this.bindedData.slice((page-1)*this.maxPerPage, page*this.maxPerPage)];
    }
    
  }
  
  /**
   * Sorts data from a given property
   */
  public sort(property: string, direction: string){
    let sorter: Sorter = new Sorter();
    this.bindedData.sort(sorter.startSort(property, direction));
    this.paginate(this.currentPage);
  }
  
  /**
   * Toggles selection mode
   */
  public toggleSelectionMode(value: boolean){
    
    // If same selection mode, do nothing
    if(this._selectionMode == value){
      return;
    }
    
    // Else set the new selection mode
    this._selectionMode = value;
    if(this._selectionMode != undefined){
      this.gridTemplateColumns = this.concatenateColumnSizes();
    }
    
    // Handle the "clickableRowToSelect"
    if(value){
      this.currentClickRowToSelect = true;
    }
    else{
      this.currentClickRowToSelect = this.clickRowToSelect;
    }
    
    // Reset selection map if not in selection mode anymore
    if(!value){
      this.resetSelectionMap();
    }
    
  }
  
  /**
   * Toggles column display on of off
   */
  public toggleColumnDisplay(column: IColSpec, value: boolean){
    column.hide = !value;
    this.gridTemplateColumns = this.concatenateColumnSizes();
  }

  /**
   * Toggles the selection status of an item
   */
  public toggleSelectionStatus(item: any){
    this.selectionMap.set(item, !this.selectionMap.get(item));
    
    // Emit select event
    this.select.next(this.getSelectedItems());
  }
  
  /**
   * Resets selection map
   */
  public resetSelectionMap(){
    for(let item of this.data){
      this.selectionMap.set(item, false);
    }
  }
  
  public getSelectedItems(): any[]{
    let selectedItems: any[] = [];
    for(let entry of this.selectionMap.entries()){
      if(entry[1]){
        selectedItems.push(entry[0]);
      }
    }
    return selectedItems;
  }
  
  /**
   * Handles click on a row
   */
  public onClickRow(item: any){
    // Do nothing if not in selection mode and 'clickToSelect' flag set to false
    if(!this._selectionMode && !this.clickRowToSelect){
      return;
    }
    
    // Toggle selection status of the item
    this.toggleSelectionStatus(item);
    
    // Deal with selection mode
    this.toggleSelectionMode(Array.from(this.selectionMap.values()).includes(true));
  }
  
  /**
   * Handles click on a selection action
   */
  public onClickSelectionActionProposal(selectionActionProposal: ITlNamedIcon){
    
    // Create corespondind selection action
    
    
    // Emit corresponding event
    this.actOnSelectedItems.next({
        actionId: selectionActionProposal.name,
        selectedItems: this.getSelectedItems()
      });
  }
  
  public onChangeValue(item: any, column: IColSpec, value: any){
    this.changeValue.next({
        item: item,
        fieldName: column.fieldName,
        value: value
      });
  } 
}
