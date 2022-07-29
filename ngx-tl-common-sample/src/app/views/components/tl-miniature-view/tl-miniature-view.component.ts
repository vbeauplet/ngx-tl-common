import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-miniature-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-miniature-view.component.html',
  styleUrls: ['./tl-miniature-view.component.css']
})
export class TlMiniatureViewComponent implements OnInit {


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
  <tl-miniature
    [photoUrl]="'/assets/img/herisson.jpg'"
    [label]="'Hedgehog'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [borderRadius]="1000">
    
    Very cute
    
  </tl-miniature>
    `;
  }
}
