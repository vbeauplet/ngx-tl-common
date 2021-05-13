import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tl-overlay',
  host: { 
      '[class]' : 'this.tlStyle'
    },
  templateUrl: './tl-overlay.component.html',
  styleUrls: ['./tl-overlay.component.scss']
})
export class TlOverlayComponent implements OnInit {

  /**
   * Style of the overlay, in the tl-style system
   * Note: only the iner style of the block will be seen, external-shadow-priented style won't matters'
   * tl-sharp-transparent by default
   */
  @Input() tlStyle: string = 'tl-sharp-transparent';

  constructor() { }

  ngOnInit(): void {      
  }

}
