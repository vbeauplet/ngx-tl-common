import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-pulsar-logo',
  host: { 
      'class' : 'tl-row-dir tl-hor-center tl-vert-center tl-no-wrap tl-flex-block',
    },
  templateUrl: './tl-pulsar-logo.component.html',
  styleUrls: ['./tl-pulsar-logo.component.scss']
})
export class TlPulsarLogoComponent implements OnInit {

  /**
   * Pulsar logo size, in px
   */
  @Input() logoSize: number = 80;
  
  /**
   * Pulsar logo color, in the tl-color system
   * tl-outline by default
   */
  @Input() logoColor: string = 'tl-outline';

  constructor() { }

  ngOnInit(): void {
  }

}
