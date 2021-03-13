import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tl-overlay',
  templateUrl: './tl-overlay.component.html',
  styleUrls: ['./tl-overlay.component.scss']
})
export class TlOverlayComponent implements OnInit {

  /**
   * Overlay background-color CSS property
   */
  @HostBinding('style.background-color') @Input() bgColor: string = 'transparent';

  constructor() { }

  ngOnInit(): void {      
  }

}
