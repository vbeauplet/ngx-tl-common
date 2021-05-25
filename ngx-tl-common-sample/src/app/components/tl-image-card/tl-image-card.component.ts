import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITlNamedIcon } from 'ngx-tl-common';

@Component({
  selector: 'tl-image-card',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " tl-container-flex-block"',
      '[class.tl-margined]' : 'this.margined'
    },
  templateUrl: './tl-image-card.component.html',
  styleUrls: ['./tl-image-card.component.css']
})
export class TlImageCardComponent implements OnInit {

  /**
   * Size of the card, can be tl-big, tl-medium, tl-small.. Medium by default
   */ 
  @Input() size: string = 'tl-medium';
  
  /**
   * Tl Style of the card
   */
  @Input() tlStyle: string = 'tl-neumorphic';
 
  /**
   * Fixed height, in px. If not provided, height is auto
   */
  @Input() fixedHeight: number = -1;
 
  /**
   * Tells if card is loading and shall therefore display a loader as content
   */
  @Input() isLoading: boolean = false;
  
  /**
   * Tells if card is margined, true by default
   */
  @Input() margined: boolean = true;
  
  /**
   * Title of the card, if any
   * Empty string if one (default)
   */
  @Input() title: string = '';
  
  /**
   * Style of the action center that contains the active icons
   */
  @Input() actionCenterStyle: string = 'tl-soft-transparent';

  /**
   * URL of the image or photo to display at the top of the card
   */
  @Input() imageSrc: string = '';
  
  /**
   * Shape of the photo or image
   */
  @Input() imageShape: string = 'square';
  
  /**
   * Image padding, in px
   */
  @Input() imagePadding: number = 0;
  
  /**
   * Active icons to propose to the user in card image or phot
   * If none no 'action center' will be displayed
   */
  @Input() imageIcons: ITlNamedIcon[] = [];

  /**
   * Body padding, in px
   * 20px by default
   */
  @Input() bodyPadding: number = 20;

  /**
   * Event to raise when clicking on an active icon
   * Payload is te name of the named icon
   */
  @Output() clickButton: EventEmitter<string> = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

}
