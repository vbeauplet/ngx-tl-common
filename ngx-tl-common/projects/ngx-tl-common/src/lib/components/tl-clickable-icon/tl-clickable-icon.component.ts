import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tl-clickable-icon',
  host: { 
      'class' : 'tl-col-dir tl-hor-center tl-vert-center tl-no-wrap tl-flex-block',
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
   * Icon, in the tl-icon-system, when the toggler is toggled on
   * If undefined, icon is the default 'icon'
   */
  @Input() iconOn: string = undefined;


  constructor() {
  }
  
  ngOnInit(): void {
  }
}
