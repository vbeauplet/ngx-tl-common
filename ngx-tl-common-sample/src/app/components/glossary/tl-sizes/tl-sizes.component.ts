import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tls-sizes',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " tl-big-margined tl-big-padded tl-container-flex-block"',
    },
  templateUrl: './tl-sizes.component.html',
  styleUrls: ['./tl-sizes.component.css']
})
export class TlSizesComponent implements OnInit {

  /**
   * Size
   */
  @Input() size: string = 'tl-xbig';
  
  /**
   * Style
   */
  @Input() tlStyle: string = 'tl-neumorphic';

  constructor() { }

  ngOnInit(): void {
  }

}
