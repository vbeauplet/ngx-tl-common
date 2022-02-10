import { Component, OnInit, Input } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-miniature',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " " + this.borderRadius + " tl-clickable tl-hor-space-between tl-vert-center tl-row-dir tl-no-wrap tl-flex-no-shrink tl-container-flex-block"',
    },
  templateUrl: './tl-miniature.component.html',
  styleUrls: ['./tl-miniature.component.scss']
})
export class TlMiniatureComponent implements OnInit {

  /**
   * URL of the minaiture photo.
   * Shall be provided
   */
  @Input() photoUrl: string = '';
  
  /**
   * Label of the miniature
   * Shall be provided
   */
  @Input() label: string = '';
  
  /**
   * Browse link, if any
   * Can be let undocumented if none
   */
  @Input() link: string = '';
  
  /**
   * tl-size of the miniature container
   */
  @Input() size: string = 'tl-near-full';
  
  /**
   * Miniature height, in px
   * 50 by default
   */
  @Input() height: number = 50;
  
  /**
   * Miniature border radius, in the tl-br system
   */
  @Input() borderRadius: string = 'tl-br-small';
  
  /**
   * Style of the miniature
   * Can be: tl-soft-transparent, tl-outlined, tl-neumorphic...
   * tl-soft-transparent by default
   */
  @Input() tlStyle: string = 'tl-soft-transparent'

  constructor() { }

  ngOnInit(): void {
  }

}
