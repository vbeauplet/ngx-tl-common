import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tl-clickable-icon',
  host: { 
      'class' : 'tl-hor-center tl-vert-center tl-no-wrap tl-flex-block',
      '[class.tl-col-dir]' : 'this.labelPosition == "bottom" || this.labelPosition == "bottom"',
      '[class.tl-row-dir]' : 'this.labelPosition == "left" || this.labelPosition == "right"'
    },
  templateUrl: './tl-clickable-icon.component.html',
  styleUrls: ['./tl-clickable-icon.component.scss']
})
export class TlClickableIconComponent implements OnInit {
  
  /**
   * Size of the square icon, in px
   */
  @Input() size: number = 40;
  
  /**
   * Accentuation color of the icon when toggled on
   */
  @Input() color: string = 'tl-outline';

  /**
   * Icon, in the tl-icon-system
   */
  @Input() icon: string = 'tl-ion-heart';
  
  /**
   * Label to put under the clickable icon, if any
   */
  @Input() label: string = undefined;
  
  /**
   * Labelsize, in the tl-content size system
   */
  @Input() labelSize: string = 'tl-regular';
  
  /**
   * Label position, (may be left, right, top or bottom)
   */
  @Input() labelPosition: string = 'bottom';
  
  /**
   * Icon, in the tl-icon-system, when the toggler is toggled on
   * If undefined, icon is the default 'icon'
   */
  @Input() iconOn: string = undefined;


  constructor() {
  }
  
  ngOnInit(): void {
  }
}
