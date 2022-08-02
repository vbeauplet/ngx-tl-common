import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-search-bar',
  host: { 
    '[class]' : 'this.size + " tl-row-dir tl-hor-space-between tl-no-wrap tl-flex-block"'
    },
  templateUrl: './tl-search-bar.component.html',
  styleUrls: ['./tl-search-bar.component.scss']
})
export class TlSearchBarComponent implements OnInit {

  /**
   * Size of the search bar container
   * tl-full (100%) by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Tl style of the search bar
   * May be tl-neumorphic (default), tl-soft-transparent or tl-sharp-transparent. No other style is handled yet
   */
  @Input() tlStyle: string = 'tl-neumorphic'
  
  /**
   * Button shape. May be 'square' or 'round'
   */
  @Input() buttonShape: string = 'square';
  
  /**
   * Search bar input placeholder
   */
  @Input() placeholder: string = 'Search';
  
  
  /**
   * Unique ID (displayed on the page) of the searchbar. Shall be provided if multiple searchbars are displayed
   */
  @Input() searchBarUniqueId: string = 'searchbar';
  
  /**
   * Output event which is emitted in case a new search has been asked by search-bar
   * Payload of the event is the search input content
   */
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * Handle press enter button on search-bar input
   */
  public onPressEnter(searchValue: string) {
    this.emitSearchEvent(searchValue);
  }
  
  /**
   * Handle click on the search button
   */
  public onClickSearchButton() {
    let searchInput: any = document.getElementById(this.searchBarUniqueId);
    this.emitSearchEvent(searchInput.value);
  }
  
  /**
   * Emits the search event
   */
  private emitSearchEvent(value: string){
    this.searchValue.emit(value);
  }
}
