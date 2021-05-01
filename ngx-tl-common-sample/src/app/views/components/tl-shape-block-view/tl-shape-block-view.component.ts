import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-shape-block-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-shape-block-view.component.html',
  styleUrls: ['./tl-shape-block-view.component.css']
})
export class TlShapeBlockViewComponent implements OnInit {


  public htmlCode: string;;

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
  <tl-shape-block
    class="tl-outline-bg-element"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [shape]="'` + this.componentPreferenceService.style.shape + `'">
  </tl-shape-block>
    `;
  }
}
