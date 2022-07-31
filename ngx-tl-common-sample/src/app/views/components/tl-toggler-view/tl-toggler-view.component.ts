import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-toggler-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-toggler-view.component.html',
  styleUrls: ['./tl-toggler-view.component.css']
})
export class TlTogglerViewComponent implements OnInit {

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
  <tl-toggler
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [label]="'Toggle on/off'"
    [onBgColor]="'` + this.componentPreferenceService.style.color + `'">
  </tl-toggler>
    `;
  }
}
