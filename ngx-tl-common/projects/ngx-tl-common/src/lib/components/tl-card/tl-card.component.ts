import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITlNamedIcon } from '../../interfaces/tl-named-icon.interface';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-card',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " tl-container-flex-block"',
      '[class.tl-margined]' : 'this.margined'
    },
  templateUrl: './tl-card.component.html',
  styleUrls: ['./tl-card.component.scss']
})
export class TlCardComponent implements OnInit {

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
   * Card padding, in px. 0 by default
   */
  @Input() padding: number = 0;
  
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
   * Active icons to propose to the user in card header action center
   * If none no 'action center' will be displayed
   */
  @Input() activeIcons: ITlNamedIcon[] = [];
  
  /**
   * Event to raise when clicking on an active icon
   * Payload is te name of the named icon
   */
  @Output() clickButton: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * Handles click on a button
   */
  public onClickButton(iconName: string){
    this.clickButton.next(iconName);
  }

}
