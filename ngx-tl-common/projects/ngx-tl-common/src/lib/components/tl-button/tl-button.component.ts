import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-button',
  host: { 
      'class':'tl-vert-center tl-hor-center tl-flex-block',
      '[class.tl-col-dir]':'this.labelPosition === "bottom"',
      '[class.tl-row-dir]':'this.labelPosition === "right"',
      '[class.disabled]' : 'this.disabled'
    },
  templateUrl: './tl-button.component.html',
  styleUrls: ['./tl-button.component.scss']
})
export class TlButtonComponent implements OnInit {

  /**
   * Button literal icon
   */
  @Input() icon: string = '';
  
  /**
   * Button shape: 'round' or 'square'. Default value is 'round'
   */
  @Input() shape: string = 'round';
  
  /**
   * Style of the pushable button
   * tl-neumorphic-sharp by default
   */
  @Input() tlStyle: string = 'tl-neumorphic-dome'
  
  /**
   * Label of the icon, if any
   * Can be let undocumented if none
   */
  @Input() label: string = '';
  
  /**
   * Default size of the icon button, in px
   * 50 by default
   */
  @Input() size: number = 50;
  
  /**
   * Margin of the button, in px
   */
  @Input() margin: number = 10;

  /**
   * Label position, if any
   * May be 'right' of 'bottom'
   * Bottom by default
   */
  @Input() labelPosition: string = 'bottom';
  
  /**
   * Icon color when status is -1 (for stateful buttons, always otherwise)
   * Possible values are "tl-main", "tl-soft", 'tl-failure', "tl-neutral", "tl-success", "tl-outline", ...
   * "main" by default
   */
  @Input() color: string = 'tl-main';
  
  /**
   * Tells if the button is disabled (cannot be clicked)
   * False by default
   */
  @Input() disabled: boolean = false;
  
  /**
   * Click button event
   */
  @Output() clickButton: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * Handles click on button
   */
  public onClickButton(){
    if(!this.disabled){
      // Emit click button event
      this.clickButton.next();
    }
  }
}
