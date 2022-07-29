import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-select-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-select-view.component.html',
  styleUrls: ['./tl-select-view.component.css']
})
export class TlSelectViewComponent implements OnInit {

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
  <tl-select
    class="tl-big-margined"
    [placeholder]="'TC Link'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [textAlign]="'left'"
    [optionPanelStyle]="'tl-sharp-transparent'"
    [height]="'50px'"
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
      ]">
  </tl-select>
    `;
  }


}
