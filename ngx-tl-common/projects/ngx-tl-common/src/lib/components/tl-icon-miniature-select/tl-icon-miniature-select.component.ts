import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ITlSelectProposal } from '../../interfaces/tl-select-proposal.interface';
import { TlSelectComponent } from '../tl-select/tl-select.component';

@Component({
  selector: 'tl-icon-miniature-select',
  templateUrl: './tl-icon-miniature-select.component.html',
  styleUrls: ['./tl-icon-miniature-select.component.scss']
})
export class TlIconMiniatureSelectComponent extends TlSelectComponent implements OnInit {
  
  /**
   * Miniature icon
   */
  @Input() icon: string = '';

  /**
   * Miniature height, in px
   * 50 by default
   */
  @Input() miniatureHeight: number = 50;
  
  /**
   * Style of the miniature
   * Can be: tl-soft-transparent, tl-outlined, tl-neumorphic...
   * tl-neumorphic by default
   */
  @Input() tlStyle: string = 'tl-neumorphic'
  
  /**
   * Style of the select popup
   * (redefines it) tl-soft-transparent by default
   */
  @Input() selectStyle: string = 'tl-sharp-transparent'
  
  /**
   * Event that is emitted when component is being unwrapped (selection mode starts)
   */
  @Output() unwrap: EventEmitter<ITlSelectProposal> = new EventEmitter<ITlSelectProposal>();
  
  /**
   * Event which is emmited in case a new proposal has been selected
   */
  @Output() selectProposal: EventEmitter<ITlSelectProposal> = new EventEmitter<ITlSelectProposal>();
  
  /**
   * Event which is emmited in case a proposal selection has been feedback-confirmed
   * Only useful is component is feedback synchrone
   */
  @Output() selectProposalConfirmed: EventEmitter<ITlSelectProposal> = new EventEmitter<ITlSelectProposal>();
  
  /**
   * Event which is emmited in case selkect is reseted
   */
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Inner toggler component child
   */
  @ViewChild('innerSelect') innerSelect: TlSelectComponent;
  
  /**
   * Dynamic icon background color
   */
  public dynamicBgColor: string = 'tl-neutral';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.position = 'relative';
    (this.initialSelectedProposal != null)?this.dynamicBgColor = 'tl-success':this.dynamicBgColor = 'tl-failure';
  }
  
  /**
   * Gets miniature background color from select status
   */
  public refreshBgColor() {
    
    setTimeout(() => {
      
      // Color computation
      if(this.innerSelect != undefined){
        
        if(this.innerSelect.feedbackLoadingStatus == 0){
          this.dynamicBgColor = 'tl-neutral';
        }
        else if(this.innerSelect.selectedProposal != null){
          this.dynamicBgColor = 'tl-success';
        }
        else{
          this.dynamicBgColor = 'tl-failure';
        }
      }
  
    }, 10);
  }

}
