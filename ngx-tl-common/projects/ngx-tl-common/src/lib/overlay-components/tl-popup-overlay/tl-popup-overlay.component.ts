import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tl-popup-overlay',
  templateUrl: './tl-popup-overlay.component.html',
  styleUrls: ['./tl-popup-overlay.component.scss']
})
export class TlPopupOverlayComponent implements OnInit {

  /**
   * Controls the display status of the overlay popup
   * False (not displayed) by default
   * Use an input property setter to react to changes on this value
   */
  @Input() set display(value: boolean) {
   
    // If popup shall be displayed
    if(value){
      this.doDisplay();
    }
    
    // If popup shall be undisplayed
    else{
      this.doUndisplay();
    }
  }
  
  /**
   * Style of the overlay, in the tl-style system
   * Note: only the iner style of the block will be seen, external-shadow-priented style won't matters'
   * tl-sharp-transparent by default
   */
  @Input() tlStyle: string = 'tl-sharp-transparent';
  
  /**
   * Event which is emitted in case the popu is closed (end of the closing transition)
   */
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Tells if overlay shall be removed from DOM
   * True (not in DOM) by default... Until dispaly input changes
   */
  public notInDom: boolean = true;
  
  /**
   * Tells if overlay shall be hidden
   * True  (hidden) by default
   * May be changed following compoennt display status
   */
  public hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * Displays the popup overlay, with transition
   */
  public doDisplay(){
    // Put overlay in dom
    this.notInDom = false;
    
    // Wait and show overlay
    setTimeout(() => {
        this.hidden = false;
      }, 50);
  }
  
  /**
   * Undisplays the popup overlay, with transition
   */
  public doUndisplay(){
    // Hide layer
    this.hidden = true;
    
    // Wait tra nsistion and remove from Dom
    setTimeout(() => {
        this.notInDom = true;
        
        // Emit close event
        this.close.next();
        
      }, 300);
      
    
  }

}
