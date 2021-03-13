import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-progress-bar',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-hor-center tl-vert-up tl-no-wrap tl-flex-block"'
  },
  templateUrl: './tl-progress-bar.component.html',
  styleUrls: ['./tl-progress-bar.component.scss']
})
export class TlProgressBarComponent implements OnInit {

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
   * Color of the inner progressing bar, in the tl-common system
   * tl-success by default
   */
  @Input() color: string = 'tl-success';
  
  /**
   * tl-common style og the progress bar
   * Neumorphic inset by default
   */
  @Input() tlStyle: string = 'tl-neumorphic-inset-sharp';
  
  /**
   * Total numbe of progress states
   */
  @Input() total: number = 1;
  
  /**
   * Current progress bar state
   */
  @Input() current: number = 0;
  
  /**
   * Title, if any
   * Let emtpty if none
   */
  @Input() title: string = '';
  
  /**
   * Tells if step progress shall also be shown in text mode (as current / total)
   * True by default
   */
  @Input() showProgressAsText: boolean = true;
  
  /**
   * Tells if this is a progress bar to display time progression
   *
   * In this case, total and current inputs shall be given in ms
   */
  @Input() timeMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
