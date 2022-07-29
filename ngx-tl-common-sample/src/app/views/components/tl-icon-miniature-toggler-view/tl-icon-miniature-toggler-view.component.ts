import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-icon-miniature-toggler-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
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

  public htmlCode: string;
    
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
      private alertService: TlAlertService,
      public componentPreferenceService: ComponentPreferencesService
    ) { }

  ngOnInit(): void {
    // Refresh configurable HTML code
    this.refreshHtmlCode();
    
    // Subscribe to any change on component sample style
    this.componentPreferenceService.styleSubject.subscribe(() => {
        this.refreshHtmlCode();
      });
  }
  
  /**
   * Refreshes HTML Code
   */
  public refreshHtmlCode(){
    this.htmlCode = `
  <tl-icon-miniature-toggler
    [icon]="'G'"
    [offIcon]="'G'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [label]="this.label"
    [initialState]="this.state"
    [onBgColor]="'tl-success'"
    [offBgColor]="'tl-failure'"
    [borderRadius]="25">
  </tl-icon-miniature-toggler>
    `;
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
