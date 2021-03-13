import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TlHelpersService } from '../../services/tl-helpers.service';

@Component({
  selector: 'tl-accordion-panel',
  host: { 
        '[class]' : 'this.size + " tl-row-dir tl-vert-up tl-flex-block"'
    },
  templateUrl: './tl-accordion-panel.component.html',
  styleUrls: ['./tl-accordion-panel.component.scss']
})
export class TlAccordionPanelComponent implements OnInit {

  /**
   * Size of the accordion panel
   * 'Full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Header height, in px
   */
  @Input() headerSize: number = 50;
  
  /**
   * Events which is emitted when panel is being unwrapped
   */
  @Output() unwrapPanel: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Events which is emitted when panel is being wrapped
   */
  @Output() wrapPanel: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Provided id shall be different if multiple panels are included within the view
   * Computed at init time
   */
  public uniquePanelId = this.helpersService.generateId();

  /**
   * Tells if the accordion panel is wrapped
   * True by default and at init time
   */
  public isWrapped: boolean = true;
  
  /**
   * Panel content height to be displayed
   * Initially wrapped: set to '0px'
   */
  public contentHeight: string = '0px';

  constructor(
      private helpersService: TlHelpersService
    ) { }

  ngOnInit(): void {
  }
  
  /**
   * Handles click on header
   */
  public onClickHeader(){
    
    // If panel is wrapped, unwrap it
    if(this.isWrapped){
      
      // Recompute panel content height
      this.contentHeight = document.getElementById(this.uniquePanelId).scrollHeight + 'px';
      
      // Tell it is now unwrapped
      this.isWrapped = false;
      
      // Emit unwrap event
      this.unwrapPanel.next();
      
      // At the end of transition, set height to auto so that it resizes if content changes
      setTimeout(() => {
          this.contentHeight = 'auto';
        }, 300);
      
    }
    
    // Else if panel is unwrapped, wrap it
    else{
      
      // Recompute actual panel content height to launch animation from it
      this.contentHeight = document.getElementById(this.uniquePanelId).scrollHeight + 'px';
      
      setTimeout(() => {
        // Set contentHeight to 0 to start wrapping animation
        this.contentHeight = '0px';
        
        // Tell it is wrapped
        this.isWrapped = true;
        
        // Emit wrap event
        this.wrapPanel.next();
      }, 20);
    }
    
  }

}
