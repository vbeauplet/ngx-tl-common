import { Component, OnInit, Input } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-shape-block',
  host: { 
      '[class]' : 'this.size + " tl-flex-block"',
    },
  templateUrl: './tl-shape-block.component.html',
  styleUrls: ['./tl-shape-block.component.scss']
})
export class TlShapeBlockComponent implements OnInit {

  /**
   * Size of the shape-block
   * tl-full by default
   */
  @Input() size: string = 'tl-full'
  
  /**
   * Shape. may be 'square', 'rectangle', 'three-four', 'sixteen-nine', 'round'
   */
  @Input() shape: string = 'square';

  constructor() { }

  ngOnInit(): void {
  }

}
