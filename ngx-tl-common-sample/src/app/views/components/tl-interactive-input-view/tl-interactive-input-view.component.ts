import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-interactive-input-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-interactive-input-view.component.html',
  styleUrls: ['./tl-interactive-input-view.component.css']
})
export class TlInteractiveInputViewComponent implements OnInit {

  /**
   * Bindable property
   */
  public name: string = 'Valentin';

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Bindable property
   */
  public name: string = 'Valentin';

  /**
   * Handles value change from the interactive input
   */
  public onChangeValue(value: string){
    this.alertService.raiseInfo('New value: ' + value);
  }
    `;
    
  public htmlCode2: string;
    
  public tsCode2: string = `
  /**
   * Bindable property
   */
  public name: string = 'Valentin';

  /**
   * Handles value change from the interactive input
   */
  public onChangeValue(value: string){
    this.alertService.raiseInfo('New value: ' + value);
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
  <tl-interactive-input
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [inputLabel]="'Name'"
    [placeholder]="this.name"
    (changeValue)="this.onChangeValue($event)">
  </tl-interactive-input>
    `;
    
    this.htmlCode2 = `
  <tl-interactive-input
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [inline]="true"
    [placeholder]="this.name"
    (changeValue)="this.onChangeValue($event)">
  </tl-interactive-input>
    `;
  }
  
  /**
   * Handles value change from the interactive input
   */
  public onChangeValue(value: string){
    this.alertService.raiseInfo('New value: ' + value);
  }


}
