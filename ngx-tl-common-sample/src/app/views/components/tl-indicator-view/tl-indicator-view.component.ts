import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-indicator-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-indicator-view.component.html',
  styleUrls: ['./tl-indicator-view.component.css']
})
export class TlIndicatorViewComponent implements OnInit {


  public htmlCode: string;

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
  <tl-indicator
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [color]="'` + this.componentPreferenceService.style.color + `'"
    [icon]="'P'"
    [text]="'80%'"
    [textPosition]="'bottom'"
    [iconSize]="40">
  </tl-indicator>
    `;
  }
}
