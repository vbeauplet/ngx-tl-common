import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TlActiveImageComponent } from '../tl-active-image/tl-active-image.component';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-outlined-active-image',
  host: { 
      '[class]' : 'this.size + " " +  this.tlStyle + " tl-col-dir tl-hor-center tl-vert-center tl-container-flex-block"',
      '[class.tl-round]' : 'this.shape == "round"'
    },
  templateUrl: './tl-outlined-active-image.component.html',
  styleUrls: ['./tl-outlined-active-image.component.scss']
})
export class TlOutlinedActiveImageComponent extends TlActiveImageComponent implements OnInit {
  
  /**
   * tl-style of the outlined active image
   * tl-neumorphic by default
   */
  @Input() tlStyle: string = 'tl-neumorphic';
  
  /**
   * Re-emit click icon event
   */
  @Output() clickIcon: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
