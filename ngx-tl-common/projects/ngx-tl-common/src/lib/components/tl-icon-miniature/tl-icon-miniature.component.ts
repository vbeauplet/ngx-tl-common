import { Component, OnInit, Input } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-icon-miniature',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " tl-clickable tl-hor-space-between tl-vert-center tl-row-dir tl-container-flex-block"',
      '[class.margined]' : 'this.margined'
    },
  templateUrl: './tl-icon-miniature.component.html',
  styleUrls: ['./tl-icon-miniature.component.scss']
})
export class TlIconMiniatureComponent implements OnInit {

  /**
   * Miniature icon
   */
  @Input() icon: string = '';
  
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
   * Icon color, in the tl color system
   */
  @Input() color: string = 'tl-secondary';
  
    /**
   * Icon bg color, in the tl color system
   */
  @Input() bgColor: string = 'tl-success';
  
  /**
   * Tells if the miniature container shall have a standard margin
   */
  @Input() margined: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
