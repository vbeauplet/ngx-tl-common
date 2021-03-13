import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-accordion',
  host: { 
        '[class]' : 'this.size + " " + this.tlStyle + " tl-col-dir tl-vert-up tl-container-flex-block"'
    },
  templateUrl: './tl-accordion.component.html',
  styleUrls: ['./tl-accordion.component.scss']
})
export class TlAccordionComponent implements OnInit {

  /**
   * Size of the accordion panel
   * 'Full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Tl-style of the container
   */
  @Input() tlStyle: string = 'tl-neumorphic';

  constructor() { }

  ngOnInit(): void {
  }

}
