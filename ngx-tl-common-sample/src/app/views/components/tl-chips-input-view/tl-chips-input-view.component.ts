import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-chips-input-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-chips-input-view.component.html',
  styleUrls: ['./tl-chips-input-view.component.css']
})
export class TlChipsInputViewComponent implements OnInit {
  
  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles add a new chip
   */
  public onAdd(value: string){
    this.alertService.raiseInfo('New added value: ' + value);
  }
  
  /**
   * Handles remove of a chip
   */
  public onRemove(value: string){
    this.alertService.raiseInfo('Value Removed: ' + value);
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
  <tl-chips-input
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [chipsStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [inputPlaceholder]="'Add new'"
    [initialChips]="['Sweet', 'Salty', 'Tasty']"
    (add)="this.onAdd($event)"
    (remove)="this.onRemove($event)">
  </tl-chips-input>
    `;
  }
  
  /**
   * Handles add a new chip
   */
  public onAdd(value: string){
    this.alertService.raiseInfo('New added value: ' + value);
  }
  
  /**
   * Handles remove of a chip
   */
  public onRemove(value: string){
    this.alertService.raiseInfo('Value Removed: ' + value);
  }
  
}
