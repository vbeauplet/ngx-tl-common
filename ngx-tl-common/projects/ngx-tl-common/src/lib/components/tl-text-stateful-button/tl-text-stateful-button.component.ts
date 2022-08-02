import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-text-stateful-button',
  host: { 
    '[class]' : 'this.size + " " + this.tlStyle + " " + this.color + "-bg-element tl-pushable tl-top-margined tl-bottom-margined tl-padded tl-vert-center tl-hor-center tl-container-flex-block"',
      '[class.disabled]' : 'this.disabled'
    },
  templateUrl: './tl-text-stateful-button.component.html',
  styleUrls: ['./tl-text-stateful-button.component.scss']
})
export class TlTextStatefulButtonComponent implements OnInit {

  /**
   * Size of the card, can be tl-big, tl-medium, tl-smal, tl-initial-width.. Medium by default
   */ 
  @Input() size: string = 'tl-fit-content';
  
  /**
   * Tl Style of the card
   */
  @Input() tlStyle: string = 'tl-neumorphic';
  
  /**
   * Background color of the button, in the tl color system
   * Empty string if none
   */
  @Input() color: string = '';
  
  /**
   * Button literal icon
   * Empty if none
   */
  @Input() icon: string = '';
  
  /**
   * Button text
   */
  @Input() text: string = 'Submit';
  
  /**
   * Status of the stateful-button, standard by default
   */
  @Input() status: number = -1; // -1: Standard, 0: isLoading, 1:Success, 2: Failure
  
  /**
   * Text alignement
   */
  @Input() textAlign: string = 'left';
  
  /**
   * Tells if the button is disabled (cannot be clicked)
   * False by defualt
   */
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

}
