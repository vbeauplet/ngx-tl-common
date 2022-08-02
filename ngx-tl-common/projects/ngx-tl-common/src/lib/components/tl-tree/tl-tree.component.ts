import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren, OnChanges } from '@angular/core';

/**
 * Column specification for the tree component.
 * Provided column spec shall follow this interface
 */
export interface IColSpec {
  fieldName: string;
  title: string;
  size: number // In fr;
  editable: boolean;
}

/**
 * Specification of a tree value
 */
export interface ITreeValue{
  itemId: string,
  fieldName: string,
  value: string
}


/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-tree-node',
  templateUrl: './tl-tree-node.component.html',
  styleUrls: ['./tl-tree.component.scss'],
})
export class TlTreeNodeComponent implements OnInit {

  /**
   * Children tree node components
   */
  @ViewChildren(TlTreeNodeComponent) childrenTreeNodes: QueryList<TlTreeNodeComponent>;

  /**
   * Tells if parent is folded or unfolded
   * SYnc with the unfolded parent property
   */
  @Input() parendFolded = true;

  /**
   * Node item
   * Mandatory
   */
  @Input() item: any;

  /**
   * Name of the attribute of the object that stores the children objects.
   * If no nested object are stored under this node, it means there is no children
   */
  @Input() nestedItemsFieldName: string = 'children';
  
  /**
   * To use only if node data is stored under one specific field (example: all gathered in a 'data' field)
   * Let null if data is store as primitive properties of the node
   */
  @Input() nestedDataFieldName: string = null;
  
  /**
   * Name of the field that uniquely identifies an item among others
   */
  @Input() idFieldName: string = '';
  
  /**
   * Name of the field that is used for search filter
   * Not useful if no tree searchbar
   * 'name' by default
   */
  @Input() searchFieldName: string = 'name';
  
  /**
   * Field which is used to know if a node row is selected
   * Value related to this field is is the one compared to the selection value
   *
   * Do not document if selection is not needed
   */
  @Input() selectionFieldName: string = 'name';

  /**
   * List of all columns describing properties to be displayed within for each node item
   */
  @Input() columns: IColSpec[] = [];

  /**
   * Nest level of the node
   */
  @Input() level: number = 0;

  /**
   * Tells if a 'details' row shall be accessible via a dedicated button (=='' or !='')
   * and additionnaly gives the item property which provides the details to display
   * Empty string if none
   */
  @Input() detailsRowFieldName: string = '';
  
  /**
   * Value to match for a row to appear as selected
   * Let empty if no row are selected
   * Selected rows appear outlined
   */
  @Input() selectionValue: string = '';
  
  /**
   * CSS grid property concatenated column sizes
   * GIven by root table
   */
  @Input() gridTemplateColumns: string = '';
  
  /**
   * Tells if tree items shall be clickable
   * If clickable, the clickItem event is emitted everytime an item is clicked
   */
  @Input() clickable: boolean = false;
  
  /**
   * Tells if wrap nodes (that have children and can be wrapped/unwrapped) can be clicked
   * If set clickableWrapNode, the clickItem event is emitted everytime a wrap item is clicked
   * False by defualt
   */
  @Input() clickableWrapNode: boolean = false;
  
  /**
   * Event emitted when changing a tree value (of an editable field)
   * Carried payload is an ITreeValue
   */
  @Output() changeTreeValue: EventEmitter<ITreeValue> = new EventEmitter<ITreeValue>();
  
  /**
   * Event emitted when clicking on curretn tree item, only if tree is clickable
   * Cariied payload is the clicked item
   */
  @Output() clickItem: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Tells if a specific node has its children unfolded
   */
  public isUnfolded: boolean = false;
  
  /**
   * Tels if current node shall be hidden from displayed tree due to filters
   * May be filtered from user free search
   */
  public isFiltered: boolean = false;
  
  /**
   * Tells if current node shall be highlighted
   * May be because:
   * -Search perfectly match node item
   */
  public isHighlighted: boolean = false;
  
  /**
   * Tells if current row is selected
   */
  public isSelected: boolean = false;
  
  /**
   * Tells if current row is a parent node of a selected row
   */
  public isParentNodeOfSelected: boolean = false;

  /**
   * Tells if a specific node is unfolded
   */
  public isDetailsRowUnfolded: boolean = false;


  constructor() { }

  ngOnInit() { }

  /**
   * Tells if an item (a tree node) has children
   */
  public hasChildren(): boolean {
    const itemChildren: any[] = this.item[this.nestedItemsFieldName];
    return itemChildren != undefined && itemChildren != null && itemChildren.length !== 0;
  }

  /**
   * Gives children of an item
   */
  public getChildren(): any[] {
    const itemChildren: any[] = this.item[this.nestedItemsFieldName];
    return itemChildren;
  }

  /**
   * Gets the value corresponding to a custom property
   */
  public getPropertyValue(propertyName: string): string {    
    if(this.nestedDataFieldName == null){
      return  this.item[propertyName];
    }
    else{
      return this.item[this.nestedDataFieldName][propertyName];
    }
  }
  
  /**
   * Unwraps all children nodes
   * If recursive, recursively unxraps children of children nodes
   */
  public unwrapChildren(recursive: boolean) {
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      child.isUnfolded = true;
      if(recursive){
        child.unwrapChildren(true);
      }
    });
  }
  
  /**
   * Unwraps selected children nodes
   */
  public unwrapSelectedChildren() {
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      if(child.isParentNodeOfSelected){
        child.isUnfolded = true;
        child.unwrapSelectedChildren();
      }
    });
  }
  
  /**
   * Wraps all children nodes
   * If recursive, recursively wraps children of children nodes
   */
  public wrapChildren(recursive: boolean) {
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      child.isUnfolded = false;
      if(recursive){
        child.wrapChildren(true);
      }
    });
  }
  
  /**
   * Filter current node and children from from search value
   * Hide if provided value does not match with dedicated search attribute
   * Recursive method: do it also on children nodes
   *
   * Returns true if filtered (shall be hidden), false otherwise
   */
  public filter(searchValue: string): boolean{
    
    let searchProperty: string = this.getPropertyValue(this.searchFieldName);
    
    
    // First check children filtering state: if a child is not hidden (match search),
    // current node shall be displayed as a consequence
    let oneVisibleChild = false;
    
    // Browse through child and filter out
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
        let isChildHidden: boolean = child.filter(searchValue);
        if(!isChildHidden){
          
          // One child is visible, shall display node anyway
          oneVisibleChild =true;
        }
      });
      
    // Filter current node: check for potential visible children or direct search match
    if(searchProperty.toLowerCase().includes(searchValue.toLowerCase())){
      // Search matches current node, it should be highlighted
      this.isFiltered = false;
      if(searchValue != ''){
        this.isHighlighted = true;
      }
      else{
        this.isHighlighted = false;
      }
      
      // And all children shall be visible
      this.unfilter();
    }
    else if(oneVisibleChild){
      // At least one child is visible, node shall not be filtered out
      this.isFiltered = false;
      this.isHighlighted = false;
    }
    else{
      // No child is visble and filter does not match: filter yet
      this.isFiltered = true;
      this.isHighlighted = false;
    }
    
    // Return updated status
    return this.isFiltered;
  }
  
  /**
   * Unfilters (set filtered flag to false) current node and all children nodes
   */
  public unfilter() {
    
    // Unfilter node
    this.isFiltered = false;
    
    // Browse through child and unfilter recursively all children
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
        child.unfilter();
      });
  }
  
  /**
   * Recursively checks if current row and children are selected or not
   * Additionaly sets if current row is a parent of a selected row
   * Returns true if current row is selected or parent of a selected row
   */
  public checkSelected(): boolean {
    
    // Check selection value is not empty
    if(this.selectionValue == null || this.selectionValue == ''){
      return false;
    }
    
    // Init result
    let result: boolean = false;
    
    // Retrieve selection value
    let selectionProperty: string = this.getPropertyValue(this.selectionFieldName);
    
    // Browse through children and recursively check if selected
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
        if(child.checkSelected()){
          result = true;
        }
      });
      
    // Current result tells you if node is a parent of a selected row
    if(result){
      this.isParentNodeOfSelected = true;
    } 
    else{
      this.isParentNodeOfSelected = false;
    }
      
    // Check if current node is selected
    if(selectionProperty.toLowerCase() == this.selectionValue.toLowerCase()){
      this.isSelected = true;
      result = true;
    }
    else{
      this.isSelected = false;
    }
    
    return result;
  }
  
  /**
   * Triggers when an editable tree value is changed
   */
  public onChangeTreeValue(value: string, fieldName: string){
    // Emit change tree value event
    this.changeTreeValue.next({
        itemId: this.getPropertyValue(this.idFieldName),
        fieldName: fieldName,
        value: value
      });
  }
  
  /**
   * Triggers when an editable tree value of a child node is changed
   */
  public onChangeChildTreeValue(treeValue: ITreeValue){
    // Emit change tree value event
    this.changeTreeValue.next(treeValue);
  }
  
  /** 
   * Handles click on current tree item
   */
  public onClickRow(){
    this.clickItem.next(this.item);
  }
}

/**
 * Tree component
 *
 * @author vbeauplet
 */
@Component({
  selector: 'tl-tree',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-hor-left tl-flex-block"' 
  },
  templateUrl: './tl-tree.component.html',
  styleUrls: ['./tl-tree.component.scss'],
})
export class TlTreeComponent implements OnInit, OnChanges {

  /**
   * Children tree node components
   */
  @ViewChildren(TlTreeNodeComponent) childrenTreeNodes: QueryList<TlTreeNodeComponent>;

  /**
   * Tree data: list of high level items which tree is to be displayed
   * Provided nodes shall have a 'name' property
   */
  @Input() data: any[] = [];
  
  /**
   * Size of the stepper
   * 'tl-full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Name of the field that uniquely identifies an item among others
   * 'name' by default
   * Not useful if this is a non-editable tree
   */
  @Input() idFieldName: string = 'name';
  
  /**
   * Name of the field that is used for search filter
   * Not useful if no tree searchbar
   * 'name' by default
   */
  @Input() searchFieldName: string = 'name';
  
  /**
   * Field which is used to know if a node row is selected
   * Value related to this field is is the one compared to the selection value
   *
   * Do not document if selection is not needed
   */
  @Input() selectionFieldName: string = 'name';
  
  /**
   * Name of the attribute of the object that stores the children objects.
   * If no nested object are stored under this node, it means there is no children
   */
  @Input() nestedItemsFieldName: string = 'children';
  
  /**
   * To use only if node data is stored under one specific field (example: all gathered in a 'data' field)
   * Let null if data is store as primitive properties of the node
   */
  @Input() nestedDataFieldName: string = null;

  /**
   * Tells if tree shall have a header row
   */
  @Input() hasHeaderRow: boolean = false;

  /**
   * List of all columns describing properties to be displayed within for each node item
   */
  @Input() columns: IColSpec[] = [];

  /**
   * Tells if a 'details' row shall be accessible via a dedicated button (=='' or !='')
   * and additionnaly gives the item property which provides the details to display
   * Empty string if none
   * None by default
   */
  @Input() detailsRowFieldName: string = '';
  
  /**
   * Value to match for a row to appear as selected
   * Let empty if no row are selected
   * Selected rows appear outlined
   */
  @Input() selectionValue: string = '';
  
   
  /**
   * Tells if tl-tree is included within menu
   * Only useful for search input color...
   */
  @Input() inMenu: boolean = false;
  
  /**
   * Tells if tree items shall be clickable
   * If clickable, the clickItem event is emitted everytime an item is clicked
   */
  @Input() clickable: boolean = false;
  
  /**
   * Tells if wrap nodes (that have children and can be wrapped/unwrapped) can be clicked
   * If set clickableWrapNode, the clickItem event is emitted everytime a wrap item is clicked
   * False by defualt
   */
  @Input() clickableWrapNode: boolean = false;
  
  /**
   * Event emitted when changing a tree value (of an editable field)
   * Carried payload is an ITreeValue
   */
  @Output() changeTreeValue: EventEmitter<ITreeValue> = new EventEmitter<ITreeValue>();
  
  /**
   * Event emitted when clicking on a tree item, only if tree is clickable
   * Cariied payload is the clicked item
   */
  @Output() clickItem: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Tells state of the "unwrap all" flag
   */
  public unwrapAllFlag: boolean = false;

  /**
   * CSS grid property concatenated column sizes
   */
  public gridTemplateColumns: string = '';

  constructor() {}

  ngOnInit() {
    // Compute gridTemplateColumns at init time
    this.gridTemplateColumns = this.concatenateColumnSizes();
   
    // Compute selected at init time
    setTimeout(() => {
        let hasSelection = this.checkSelected();
        if(hasSelection){
          this.unwrapSelectedChildren();
        }
      }, 20);
  }
  
  ngOnChanges() {
    
    // Compute selected at any change
    setTimeout(() => {
       let hasSelection = this.checkSelected();
       if(hasSelection){
          this.unwrapSelectedChildren();
        }
      }, 20);
  }

  /**
   * Concatenate the column size to compute the value of the grid-template-columns css property of a row
   */
  public concatenateColumnSizes() {
    let sizes: string = '';
    
    // Columns
    for (const colSpec of this.columns){
      sizes += ' ' + colSpec.size + 'fr';
    }

    // If any, 'more' button column
    if(this.detailsRowFieldName != ''){
      sizes += ' 30px';
    }
    
    return sizes;
  }
  
  /**
   * Unwraps all children nodes
   * If recursive, recursively unwraps children of children nodes
   */
  public unwrapChildren(recursive: boolean) {
    this.unwrapAllFlag = true;
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      child.isUnfolded = true;
      if(recursive){
        child.unwrapChildren(true);
      }
    });
  }
  
  /**
   * Unwraps selected children nodes
   */
  public unwrapSelectedChildren() {
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      if(child.isParentNodeOfSelected){
        child.isUnfolded = true;
        child.unwrapSelectedChildren();
      }
    });
  }
  
  /**
   * Wraps all children nodes
   * If recursive, recursively wraps children of children nodes
   */
  public wrapChildren(recursive: boolean) {
    this.unwrapAllFlag = false;
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      child.isUnfolded = false;
      if(recursive){
        child.wrapChildren(true);
      }
    });
  }
  
  /**
   * Filter nodes from search input value
   */
  public search(searchValue: string){
    
    // Check filter validity
    if(searchValue == undefined || searchValue == null){
      return;
    }
    
    // Unwrap all
    this.unwrapChildren(true);
    
    // Browse recusively through child nodes to check their show/hide filtering state from search value
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      child.filter(searchValue);
    });
  }
  
  /**
   * Checks for selected rows within tree
   * Returns true if there is a selected row within tree
   */
  public checkSelected(): boolean{
    
    let result: boolean = false; 
    
    // Check selection value validity
    if(this.selectionValue == undefined || this.selectionValue == null){
      return;
    }
    
    // Browse recusively through child nodes to check their selection status
    this.childrenTreeNodes.forEach((child: TlTreeNodeComponent) => {
      if(child.checkSelected()){
        result = true; 
      }
    });
    
    return result;
  }
  
  /**
   * Triggers when an editable tree value of a node is changed
   */
  public onChangeTreeValue(treeValue: ITreeValue){
    // Emit change tree value event
    this.changeTreeValue.next(treeValue);
  }
}

