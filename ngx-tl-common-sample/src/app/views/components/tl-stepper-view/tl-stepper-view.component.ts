import { Component, OnInit } from '@angular/core';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-stepper-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-stepper-view.component.html',
  styleUrls: ['./tl-stepper-view.component.css']
})
export class TlStepperViewComponent implements OnInit {

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
  <tl-stepper
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [initialSteps]="[
        {
          name: 'Init',
          label: 'Init'
        },
        {
          name: 'Running',
          label: 'Running'
        },
        {
          name: 'Completed',
          label: 'Completed'
        }
      ]">
  </tl-stepper>
    `;
  }

}
