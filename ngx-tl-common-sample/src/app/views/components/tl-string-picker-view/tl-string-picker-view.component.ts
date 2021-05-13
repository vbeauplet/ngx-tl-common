import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-string-picker-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-string-picker-view.component.html',
  styleUrls: ['./tl-string-picker-view.component.css']
})
export class TlStringPickerViewComponent implements OnInit {

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
  <tl-string-picker
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [initialItems]="['healthy', 'fat', 'pizza', 'breakfast', 'ice cream']"
    [initialSelectedItems]="['fat']"
    [singleSelection]="false"
    [editable]="true">
  </tl-string-picker>
    `;
  }


}
