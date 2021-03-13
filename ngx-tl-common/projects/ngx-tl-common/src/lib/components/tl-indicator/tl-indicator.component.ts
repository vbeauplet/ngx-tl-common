import { Component, OnInit, Input } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-indicator',
  host: { 
      '[class]':'this.size + " tl-vert-center tl-hor-center tl-flex-block"',
      '[class.tl-col-dir]':'this.textPosition === "bottom"',
      '[class.tl-row-dir]':'this.textPosition === "right"'
    },
  templateUrl: './tl-indicator.component.html',
  styleUrls: ['./tl-indicator.component.scss']
})
export class TlIndicatorComponent implements OnInit {

  /**
   * Size of the indicator container. 'tl-initial-width ' by default
   */
  @Input() size: string = 'tl-initial-width ';

  /**
   * Button literal icon
   */
  @Input() icon: string = '';
  
  /**
   * Default size of the icon, in px
   * 30 by default
   */
  @Input() iconSize: number = 30;
  
  /**
   * Margin of the indicator icon, in px
   * 5 by default
   */
  @Input() iconMargin: number = 5;
  
  /**
   * Text of the indicator
   */
  @Input() text: string = '';
  
  /**
   * Text alignment
   */
  @Input() textAlign: string = '';

  /**
   * Text position
   * May be 'right' of 'bottom'
   * Bottom by default
   */
  @Input() textPosition: string = 'bottom';
  
  /**
   * Indicator default color
   * Possible values are "tl-main", "tl-soft", 'tl-failure', "tl-neutral", "tl-success", "tl-outline"
   * "main" by default
   */
  @Input() color: string = 'tl-main';


  constructor() { }

  ngOnInit(): void {
  }
}
