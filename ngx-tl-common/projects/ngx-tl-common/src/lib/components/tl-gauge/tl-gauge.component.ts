import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-gauge',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-hor-center tl-vert-up tl-no-wrap tl-flex-block"'
  },
  templateUrl: './tl-gauge.component.html',
  styleUrls: ['./tl-gauge.component.scss']
})
export class TlGaugeComponent implements OnInit {

  /**
   * Size of the component
   */
  @Input() size: string = 'tl-small';
  
  /**
   * Heigth of the nested progress bar, in px
   * 30 by default
   */
  @Input() height: number = 30;
  
  
  /**
   * tl-common style og the progress bar
   * Neumorphic inset by default
   */
  @Input() tlStyle: string = 'tl-neumorphic-inset-sharp';
  
  /**
   * Title, if any
   * Let emtpty if none
   */
  @Input() title: string = '';
  
 
  /**
   * Low limit of the gauge
   * If current is lower than min, min level is shown on the gauge
   */
  @Input() min: number = 0;
  
  /**
   * High limit of the gauge
   * If current is higher than max, max level is shown on the gauge
   */
  @Input() max: number = 10;
  
  /**
   * Low level of the gauge
   * Shall be between min and max. Bar is in failure color if current is below low level
   */
  @Input() low: number = 2;
  
  /**
   * High level of the gauge
   * Shall be between min and max. Bar is in success color if current is over high level
   */
  @Input() high: number = 8;
  
  
  /**
   * Tells if low level shall be explicitely shown on bar
   */
  @Input() showLowLevel: boolean = true;
  
  /**
   * Tells if low level shall be explicitely shown on bar
   */
  @Input() showHighLevel: boolean = true;
  
  /**
   * Current level of the gauge
   */
  @Input() current: number = 0;
  


  constructor() { }

  ngOnInit(): void {
  }

}
