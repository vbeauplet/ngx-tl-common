import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tl-rater',
  host: { 
      'class' : 'tl-row-dir tl-vert-center tl-no-wrap tl-flex-block'
    },
  templateUrl: './tl-rater.component.html',
  styleUrls: ['./tl-rater.component.scss']
})
export class TlRaterComponent implements OnInit, OnChanges {

  /**
   * Icon to use for the rater
   */
  @Input() icon: string = '7';
  
  /**
   * Icon size, in px
   */
  @Input() iconHeight: number = 24;
  
  /**
   * Number of icons to be displayed
   */
  @Input() iconNumber: number = 10;
  
  /**
   * Rate set by rater
   * -1 if still not set
   */
  @Input() rate = -1;
  
  /**
   * Label, if any. Empty string if none
   */
  @Input() label: string = '';
  
  /**
   * Tells if the rater is locked, which mean user cannot change the rate by itself
   */
  @Input() locked: boolean = false;
  
  /**
   * Flag to tell if rate shall be shown explicitely
   */
  @Input() showRateExplicitely: boolean = false;
  
  /**
   * Loading status of the rater
   * -2 if no loading status shall be displayed
   * Loading status from -1 to 2 otherwise
   */
  @Input() loadingStatus: number =-2;
  
  /**
   * Rate event, carrying note given by user
   */
  @Output() setRate: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Iterator array
   */
  public iterable: any[] = [];
  
  /**
   * Rounded rate
   */
  public roundedRate: number = -1;

  constructor() {}

  ngOnInit(): void {
    this.iterable = Array(this.iconNumber);
    this.roundedRate = Math.round(this.rate);
  }
  
  ngOnChanges(): void {
    this.iterable = Array(this.iconNumber);
    this.roundedRate = Math.round(this.rate);
  }
  
  /**
   * Handles click on a rater icon
   */
  public onClickIcon(i :number){
    
    // Set rate
    this.rate = 10 - i;
    this.roundedRate = Math.round(this.rate);
    
    // Emit the setRate event
    this.setRate.next(this.rate);
  }

}
