import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-icon-miniature-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-icon-miniature-view.component.html',
  styleUrls: ['./tl-icon-miniature-view.component.css']
})
export class TlIconMiniatureViewComponent implements OnInit {

  /**
   * Current progress state
   */
  public current: number = 0;
  
  /**
   * Tells if progress process is in success
   */
  public success: boolean = true;

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
  <tl-icon-miniature
    [icon]="'G'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [bgColor]="'tl-success'"
    [borderRadius]="25">
    All good
  </tl-icon-miniature>
    `;
  }
}
