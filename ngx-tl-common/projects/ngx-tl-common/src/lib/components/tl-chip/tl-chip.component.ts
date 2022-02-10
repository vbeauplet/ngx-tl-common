import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-chip',
  host: { 
      '[class]' : 'this.tlStyle + " tl-br-infinite tl-row-dir tl-hor-space-between tl-vert-center tl-no-wrap tl-container-flex-block"',
      '[class.selected]' : 'this.selected',
      '[class.clickable]' : '"tl-clickable"',
      '[class.disabled]' : 'this.disabled'
  },
  templateUrl: './tl-chip.component.html',
  styleUrls: ['./tl-chip.component.scss']
})
export class TlChipComponent implements OnInit {

  /**
   * Style of the chip component
   */
  @Input() tlStyle: string = 'tl-soft-transparent';
  
  /**
   * Icon of the chip button, if any. null if none
   */
  @Input() button: string = null;
  
  /**
   * Tells if chip is disabled
   */
  @Input() disabled: boolean = false;

  /**
   * Tells if chip is selected
   */
  @Input() selected: boolean = false;
  
    /**
   * Event which is raised if chip button is clicked
   */
  @Output() clickButton: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
