import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-button-toggler-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-button-toggler-view.component.html',
  styleUrls: ['./tl-button-toggler-view.component.css']
})
export class TlButtonTogglerViewComponent implements OnInit {

  public htmlCode: string = `
  <tl-button-toggler
    [tlStyle]="'tl-neumorphic tl-dome'"
    [icon]="'O'"
    [label]="'Speak'"
    [height]="50"
    [labelPosition]="'right'"
    [color]="'tl-outline'"
    (toggleOn)="this.onToggleOn()"
    (toggleOff)="this.onToggleOff()">
  </tl-button-toggler>
    `;
    
  public tsCode: string = `
  /**
   * Handles toggle on
   */
  public onToggleOn(){
    this.alertService.raiseInfo('Toggle On !');
  }

  /**
   * Handles toggle off
   */
  public onToggleOff(){
    this.alertService.raiseInfo('Toggle Off !');
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
  <tl-button-toggler
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [shape]="'` + this.componentPreferenceService.style.shape + `'"
    [color]="'` + this.componentPreferenceService.style.color + `'"
    [icon]="'O'"
    [label]="'Speak'"
    [height]="50"
    [labelPosition]="'right'"
    (toggleOn)="this.onToggleOn()"
    (toggleOff)="this.onToggleOff()">
  </tl-button-toggler>
    `;
  }
  
  /**
   * Handles toggle on
   */
  public onToggleOn(){
    this.alertService.raiseInfo('Toggle On !');
  }

  /**
   * Handles toggle off
   */
  public onToggleOff(){
    this.alertService.raiseInfo('Toggle Off !');
  }
}
