import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tl-imaged-item-picker',
  host: { 
      '[class]' : 'this.size + " tl-flex-block"',
    },
  templateUrl: './tl-imaged-item-picker.component.html',
  styleUrls: ['./tl-imaged-item-picker.component.scss']
})
export class TlImagedItemPickerComponent implements OnInit {

  /**
   * Size of the card, can be tl-big, tl-medium, tl-small.. Medium by default
   */ 
  @Input() size: string = 'tl-medium';
  
  /**
   * Tl Style of the container card
   */
  @Input() tlStyle: string = 'tl-neumorphic';
  
  /**
   * Tl Style of the search bar
   */
  @Input() searchBarStyle: string = 'tl-neumorphic';
  
  /**
   * Placeholder of the Search bar
   */
  @Input() searchBarPlaceholder: string = 'Search...';
  
  /**
   * Style of the inner miniature components, in the tl-style system
   */
  @Input() miniatureStyle: string = 'tl-soft-transparent';
  
  /**
   * Miniature border radius, in the tl-br-sytem
   */
  @Input() miniatureBorderRadius: string = 'tl-br-infinite';
  
  /**
   * List of initial selected items
   */
  @Input() initialSelectedItems: any[] = [];
  
  /**
   * List of proposals among which to select items
   * Synchrone: May be modified at any time (for example following the 'search' event)
   */
  @Input() proposals: any[] = [];
  
  /**
   * Tells if proposals are loading
   */
  @Input() proposalsAreLoading: boolean = false;
  
  /**
   * Max number of displayed proposals in the proposal side
   * Gives height of the component
   */
  @Input() max: number = 5;
  
  /**
   * Attribute name of the item object type that provides the miniature image URL
   */
  @Input() miniatureImageUrlPropertyName: string = 'miniatureImageUrl';
  
  /**
   * Attribute name of the item object type that provides the item label
   */
  @Input() labelPropertyName: string = 'name';
  
  /**
   * Attribute name of the item object type that provides the item subtitle
   * Let emtpty if none
   */
  @Input() subtitlePropertyName: string = '';
  
    /**
   * Attribute name of the item object type that provides unique ID of the object (in order to compare and check if same)
   */
  @Input() uniqueIdPropertyName: string = 'id';
  
  /**
   * Tells if component shall performs a local search among current "proposals" list when search bar is active
   * Note: Current proposals may be a very partial subset of the real proposals, 
   * in this case, set this flag to false and directly use the 'search' output to modify the proposals list
   */
  @Input() enableLocalSearch: boolean = true;
  
  /**
   * Message to tell that there are no selected items yet
   */
  @Input() noSelectedItemsMessage: string = 'No item selected yet';
  
  /**
   * Message to display to show number of selected items
   * -Let undefined if no message shall be displayed
   * -Put **number** in message to display number of selected result
   */
  @Input() selectedItemsMessage: string = '**number** selected items';
  
  /**
   * Message to display in case search gives no result
   */
  @Input() noSearchResultMessage: string = 'Search to find appropriate proposals';
  
  /**
   * Message to display in case all search results cannot be displayed (> max)
   */
  @Input() tooManyResultsMessage: string = 'More results are available, search to filter';
  
  /**
   * Event that is raised when an item is selected
   * Carried payload is the just-selected item
   */
  @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Event that is raised when an item is unselected
   * Carried payload is the just-unselected item
   */
  @Output() unselectItem: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Event that is raised when the selection of items has been modified
   * Carried payload is the list of component-selected items
   */
  @Output() selectItems: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  /**
   * Event that is raised when a search for proposals action is triggered
   * Carried payload is the search value
   * This may affect the proposals list from the higher level (using) component
   */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Bindable list of selected items
   */
  public selectedItems: any[] = [];
  
  /**
   * Unfiltered list of proposals, copied from the porposal list input
   * Only really useful if the local search is activated: in this case only the local proposals list is updated, not the input !
   */
  public localProposals: any[] = [];
  
  /**
   * Bindable list of context-consistent proposals to be displayed
   */
  public displayedProposals: any[] = [];
  
  /**
   * Tells if all consistent proposals (according to search) are displayed
   * Updated at search action
   */
  public areAllConsistentProposalsDisplayed: boolean = true;
  
  /**
   * Tells if component is "flipped" which mean it shows proposals panel instead of panel with selected items
   */
  public isFlipped: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Set list of selected items from intial ones
    this.selectedItems = [... this.initialSelectedItems];
  }

  ngOnChanges(): void {
    
    // Reset local proposals to proposals
    this.localProposals = [...this.proposals];
    
    // React to any change on proposal list
    this.refreshFromProposals();
  }
  
  /**
   * Flips the proposal card
   * Useful to use a dedicated method for potential overrides !
   */
  public flip() {
    this.isFlipped = true;
  }
  
  /**
   * Unflips the proposal card
   * Useful for potential overrides !
   */
  public unflip() {
    this.isFlipped = false;
  }
  
  /**
   * Refreshes component state from proposals list
   */
  public refreshFromProposals(){
    
    // Reset displayed proposals
    this.displayedProposals = [];
    this.areAllConsistentProposalsDisplayed = true;
    
    // Browse through proposals
    for(let proposal of this.localProposals){
      
      // Check: if already selected do not display
      if(this.checkContains(this.selectedItems, proposal)){
        continue;
      }
      
      // Check if max number if reach, notify and and stop if yes
      if(this.displayedProposals.length == this.max){
        this.areAllConsistentProposalsDisplayed = false;
        break;
      }
      
      // Add to displayed proposals
      this.displayedProposals.push(proposal);
    }
  }
  
  /**
   * Handles item selection from the proposal side of the component
   */
  public onSelectItem(item: any){
    
    // Add to selected items
    this.selectedItems.push(item);
    
    // Unflip component to get back to selection
    this.unflip();
        
    // Refresh proposals
    this.refreshFromProposals();
    
    // Emit events
    this.selectItem.next(item);
    this.selectItems.next(this.selectedItems);
  }
  
  /**
   * Handles item unselection from the 'selected items' side of the component
   */
  public onUnselectItem(item: any){
    
    // Remove from selected items
    const index = this.selectedItems.indexOf(item);
    this.selectedItems.splice(index, 1);
    
    // Refresh proposals
    this.refreshFromProposals();
    
    // Emit events
    this.unselectItem.next(item);
    this.selectItems.next(this.selectedItems);
  }
  
  /**
   * Handles searchbar search
   * -Emit the searhc event with the search value (maybe to tigger proposals change)
   * -Launch componnet local search among proposals, if wanted
   */
  public onSearch(value: string){
    
    // If local search is activated, perform local search, filtering localProposals
    if(this.enableLocalSearch){
      
      // Resest local proposal list
      this.localProposals = [...this.proposals];
      
      // Filter local proposals list
      for (let item of this.proposals){
        
        if(!item[this.labelPropertyName].toLowerCase().includes(value.toLowerCase())){
          
          const index = this.localProposals.indexOf(item, 0);
          if (index > -1) {
            this.localProposals.splice(index, 1);
          }
          
        }
      }
      
      // Refresh from update local proposal list
      this.refreshFromProposals();
    }
    
    // Anyway, emit the search event so that the proposals list can be modified from an higher level
    this.search.next(value);
  }
  
  
  /**
   * Checks if two items are equals
   * Uses the unique ID propoerty of the provided items
   */
  protected checkEquals(item1: any, item2: any): boolean{
    return item1[this.uniqueIdPropertyName] == item2[this.uniqueIdPropertyName];
  }
  
    /**
   * Checks if a list of items contain the provided one
   * Uses the unique ID propoerty of the provided items
   */
  protected checkContains(list: any[], item: any): boolean{
    for(let currentItem of list){
      if(this.checkEquals(currentItem, item)){
        return true;
      }
    }
    return false;
  }

}
