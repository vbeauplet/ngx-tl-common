import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-icon-miniature-toggler-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-icon-miniature-toggler-view.component.html',
  styleUrls: ['./tl-icon-miniature-toggler-view.component.css']
})
export class TlIconMiniatureTogglerViewComponent implements OnInit {

  /**
   * Label of the miniature toggler
   */
  public label: string = 'All good';
  
  /**
   * State of the toggler
   */
  public state: boolean = true;

  public htmlCode: string = `
  <tl-icon-miniature-toggler
    [icon]="'G'"
    [offIcon]="'G'"
    [label]="this.label"
    [initialState]="this.state"
    [size]="'tl-near-half-responsive'"
    [tlStyle]="'tl-neumorphic'"
    [onBgColor]="'tl-success'"
    [offBgColor]="'tl-failure'"
    [borderRadius]="25">
  </tl-icon-miniature-toggler>
    `;
    
  public tsCode: string = `
  /**
   * Label of the miniature toggler
   */
  public label: string = 'All good';
  
  /**
   * State of the toggler
   */
  public state: boolean = true;
  
  /**
   * Handles toggle on
   */
  public onToggleOn(){
    this.state = true;
    this.label = 'All good';
  }

  /**
   * Handles toggle off
   */
  public onToggleOff(){
    this.state = false;
    this.label = 'No good';
  }
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }
  
  /**
   * Handles toggle on
   */
  public onToggleOn(){
    this.state = true;
    this.label = 'All good';
  }

  /**
   * Handles toggle off
   */
  public onToggleOff(){
    this.state = false;
    this.label = 'No good';
  }
}
