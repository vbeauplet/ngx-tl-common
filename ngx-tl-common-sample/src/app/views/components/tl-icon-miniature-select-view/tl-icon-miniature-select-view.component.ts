import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-icon-miniature-select-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-icon-miniature-select-view.component.html',
  styleUrls: ['./tl-icon-miniature-select-view.component.css']
})
export class TlIconMiniatureSelectViewComponent implements OnInit {

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
  <tl-icon-miniature-select
    class="tl-big-bottom-margined"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [miniatureHeight]="60"
    [placeholder]="'TC Link'"
    [icon]="'$'"
    [proposals]="[
        {
          name: 'Proposal 1',
          icon: 'k'
        },
        {
          name: 'Proposal 2',
          icon: 'x'
        },
        {
          name: 'Proposal 3',
          icon: 'y'
        }
      ]"
    [synchroneFeedback]="true">
  </tl-icon-miniature-select>
    `;
  }
  


}
