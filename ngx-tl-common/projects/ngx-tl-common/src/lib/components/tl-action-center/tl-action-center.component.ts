import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITlNamedIcon } from '../../interfaces/tl-named-icon.interface';

/**
 * An action center is a group of button 
 *
 * @author vbeauplet
 */
@Component({
  selector: 'tl-action-center',
  host: { 
      '[class]' : 'this.tlStyle + " tl-hor-center tl-vert-center"',
      '[class.tl-row-dir]' : 'this.direction == "row"',
      '[class.tl-col-dir]' : 'this.direction == "column"',
      '[class.ac-column]' : 'this.direction == "column"',
      '[class.ac-row]' : 'this.direction == "row"',
      '[class.tl-container-flex-block]' : 'this.tlContainerNature',
      '[class.tl-flex-block]' : '!this.tlContainerNature'
    },
  templateUrl: './tl-action-center.component.html',
  styleUrls: ['./tl-action-center.component.scss']
})
export class TlActionCenterComponent implements OnInit {
  
  /**
   * Tells if eleemnt is a container flex block or a flex-block
   * Flase by defualt, which means it is not a container by default
   */
  @Input() tlContainerNature: boolean = false;
  
  /**
   * Tl Style of the element
   * Has effect only if component is a container (see tlContainerNature flag)
   */
  @Input() tlStyle: string = 'tl-neumorphic';
  
  /**
   * Direction of the action center, may be 'row' or 'column'
   */
  @Input() direction: string = 'row';
  
  /**
   * Style of the buttons, neumorphic by default
   */
  @Input() buttonStyle: string = 'tl-neumorphic-sharp';
  
  /**
   * Shape of the buttons, round by default
   */
  @Input() buttonShape: string = 'round';
  
  /**
   * Size of the inner buttons, in px
   */
  @Input() buttonSize: number = 50;
  
  /**
   * Size of the inner buttons, in px
   */
  @Input() buttonMargin: number = 10;
  
  
  /**
   * Button Definitions
   */
  @Input() buttons: ITlNamedIcon[] = [];
  
  /**
   * Tells if provided labels shall be displayed as popovers
   * False by default
   */
  @Input() labelAsPopover: boolean = false;
  
  /**
   * Loading status of the action center
   */
  @Input() loadingStatus: number = -1;
  
  /**
   * Events to be emitted when a button of the action center is clicked
   * Carried payload is the name of the button icon
   */
  @Output() clickButton: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    
  }
  
  /**
   * Handles click on a button
   */
  public onClickButton(namedIcon: ITlNamedIcon){
    this.clickButton.next(namedIcon.name);
  }

}
