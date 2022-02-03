import { Component, OnInit, Input, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';

/**
 * Tab compoennt to put on a tab panel
 *
 * @author vbeauplet
 */
@Component({
  selector: 'tl-tab',
  host: { 
      '[class]' : '"tl-full tl-col-dir tl-hor-" + this.alignment + " tl-flex-block"',
    },
  templateUrl: './tl-tab.component.html',
  styleUrls: ['./tl-tab-panel.component.scss']
})
export class TlTabComponent implements OnInit {

  /**
   * Title of the tab
   */
  @Input() title: string = '';
  
  /**
   * Tab favicon URL
   * Let empty if none
   */
  @Input() imageUrl: string = '';
  
  /**
   * Tab icon
   * Let empty if none
   */
  @Input() icon: string = '';
  
  /**
   * Alignment of the root div of the tab content (div are on columns by default)
   */
  @Input() alignment: string = 'left';

  /**
   * Display flag of the tab
   */
  public display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}

/**
 * Tab panel compoenent to create tab-based represnetation a a dta / sytem
 *
 * @author vbeauplet
 */
@Component({
  selector: 'tl-tab-panel',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-flex-block"',
    },
  templateUrl: './tl-tab-panel.component.html',
  styleUrls: ['./tl-tab-panel.component.scss']
})
export class TlTabPanelComponent implements OnInit {

  /**
   * Children tabs
   */
  @ContentChildren(TlTabComponent) tabs: QueryList<TlTabComponent>;

  /**
   * Size of the card, can be tl-big, tl-medium, tl-small.. Medium by default
   */ 
  @Input() size: string = 'tl-medium';
  
  /**
   * Tl Style of the card
   */
  @Input() tlStyle: string = 'tl-neumorphic';
 
  /**
   * Fixed height, in px. If not provided, height is auto
   */
  @Input() fixedHeight: number = -1;
  
  /**
   * Padding, in the tl-padding system
   * May be regular, small, big, xbig...
   */
  @Input() padding: string = 'regular';
  
  /**
   * Selected tab
   */
  @Input() selectedTab: string = '';
  
  /**
   * Tells if ""close tab"" buttons shall be proposed
   */
  @Input() hasCloseTabButtons: boolean = true;
  
  /**
   * Tells if ""add tab"" buttons shall be proposed
   */
  @Input() hasAddTabButton: boolean = true;
  
  /**
   * Tells if tabs shall be srinked (title ellipsed) in case too many tabs for the width
   * If false, horizontal scroll is possible
   * True by default
   * Warning: cannot be set to false if style is neumorphic
   */
  @Input() shrinkableTabs: boolean = true;
  
  /**
   * Event which is emitted when user click on a close button of a particular tab
   * Carried payload is the tab title
   */
  @Output() closeTab: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * Event which is emitted when user click on the "add tab" button
   */
  @Output() addTab: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Flag that tells if first tab is selected
   */
  public isFirstTabSelected: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  
  ngAfterViewInit() {
    this.selectTab(this.selectedTab);
  }
  
  /**
   * Select a tab among all tabs of the panel
   */
  public selectTab(tabTitle: string){
    setTimeout(() => {
      
      // Set selected tab
      if(this.containsTab(tabTitle)){
        this.selectedTab = tabTitle;
      }
      else{
        this.selectedTab = this.tabs.first.title;
      }
      this.isFirstTabSelected = false;
      
      // Display corresponding content
      for(let tab of this.tabs){
        tab.display = false;
        if(tab.title == this.selectedTab){
          if(this.tabs.first == tab){
            this.isFirstTabSelected = true;
          }
          tab.display = true;
        }
      }
    }, 10);
  }
  
  /**
   * Tells if a tab panel contains a particular tab from name
   */
  public containsTab(tabTitle: string): boolean {
    for(let tab of this.tabs){
      if(tab.title == tabTitle){
        return true;
      }
    }
    return false;
  }
  
  
  /**
   * Handles click on close for a tab
   */
  public onClickCloseTab(tabTitle: string){
    this.closeTab.next(tabTitle);
  }
  
  /**
   * Handles click on add button
   */
  public onClickAddTab(){
    this.addTab.next();
  }
}
