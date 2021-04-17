import { Component, OnInit, Input } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-miniature',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " tl-clickable tl-hor-space-between tl-vert-center tl-row-dir tl-flex-no-shrink tl-container-flex-block"',
      '[class.margined]' : 'this.margined'
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
   * Miniature border radius, in px
   * 10 by default
   */
  @Input() borderRadius: number = 10;
  
  /**
   * Style of the miniature
   * Can be: tl-soft-transparent, tl-outlined, tl-neumorphic...
   * tl-soft-transparent by default
   */
  @Input() tlStyle: string = 'tl-soft-transparent'
  
  /**
   * Tells if the miniature container shall have a standard margin
   */
  @Input() margined: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
