import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TlImagedItemPickerComponent } from '../tl-imaged-item-picker/tl-imaged-item-picker.component';

@Component({
  selector: 'tl-inline-imaged-item-picker',
  host: { 
      '[class]' : 'this.size + " tl-row-dir tl-vert-center tl-no-br tl-flex-block"',
      '[class.tl-hor-left]' : 'this.alignment == "left"',
      '[class.tl-hor-center]' : 'this.alignment == "center"',
      '[class.tl-hor-space-between]' : 'this.alignment == "space-between"'
    },
  templateUrl: './tl-inline-imaged-item-picker.component.html',
  styleUrls: [
      './tl-inline-imaged-item-picker.component.scss',
      '../tl-imaged-item-picker/tl-imaged-item-picker.component.scss']
})
export class TlInlineImagedItemPickerComponent extends TlImagedItemPickerComponent implements OnInit {

  /**
   * Alignment of the slected items
   * May be 'left', 'center', or 'space-between'
   */
  @Input() alignment: string = 'left';

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
   * Wrapping status of the search card
   * Not redudant with the isFlipped status for transition display purposes:
   * -Wrapped only mean it is transparent and more on top
   * -Not flipped means it is not displayed
   */
  public isWrapped = true

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
  
  ngOnChanges(): void {
    super.ngOnChanges();
  }
  
  /**
   * Ovveride: unflips the proposal card
   * Deals with both 'flipped' and 'wrapped' statuses to perform transition
   */
  public unflip(){
    this.isWrapped = true;
    
    // Wait until end of transition to undisplay
    setTimeout(() => {
        this.isFlipped = false;
      }, 300);
  }
  
  /**
   * Ovveride: flips the proposal card
   * Deals with both 'flipped' and 'wrapped' statuses to perform transition
   */
  public flip(){
        
    this.isFlipped = true;
    
    // Waitsome time before starting transistion
    setTimeout(() => {
        this.isWrapped = false;
      }, 20);
  }
  
  /**
   * Handles click outside of the component
   */
  public onClickOutside() {
    if(!this.isWrapped){
      this.unflip();
    }
  }

}
