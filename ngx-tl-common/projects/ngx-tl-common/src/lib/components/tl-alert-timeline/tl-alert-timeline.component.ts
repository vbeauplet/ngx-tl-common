import { Component, OnInit, Input } from '@angular/core';
import { TlAlertService } from '../../services/tl-alert.service';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-alert-timeline',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-vert-up tl-flex-block"'
  },
  templateUrl: './tl-alert-timeline.component.html',
  styleUrls: ['./tl-alert-timeline.component.scss']
})
export class TlAlertTimelineComponent implements OnInit {

  /**
   * Size of the alert timeline
   * 'full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * tl-tyle of the stepper dots. May be tl-outlined, tl-neumorphic, tl-transparent, tl-glassmorphic...
   * tl-neumorphic by default
   */
  @Input() tlStyle: string = 'tl-neumorphic';

  /**
   * Limit number of alerts displayed in timeline
   */
  @Input() limit: number = 5;

  constructor(
    public alertService: TlAlertService
  ) { }

  ngOnInit(): void {
  }

}
