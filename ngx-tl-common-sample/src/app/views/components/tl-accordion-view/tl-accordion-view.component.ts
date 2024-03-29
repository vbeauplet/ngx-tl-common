import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-accordion-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-accordion-view.component.html',
  styleUrls: ['./tl-accordion-view.component.css']
})
export class TlAccordionViewComponent implements OnInit {

  public htmlCode: string;
    
  public tsCode: string = `
  public list: any = [
      {
        name: 'Item 1',
        description: 'Something within content of the panel',
        other: ' And an other one'
      },
      {
        name: 'Item 2',
        description: 'Something within content of the panel',
        other: ' And an other one'
      },
      {
        name: 'Item 3',
        description: 'Something within content of the panel',
        other: ' And an other one'
      },
      {
        name: 'Item 4',
        description: 'Something within content of the panel',
        other: ' And an other one'
      }
    ];
    `;
    
    
  public list: any = [
      {
        name: 'Item 1',
        description: 'Something within content of the panel',
        other: ' And an other one'
      },
      {
        name: 'Item 2',
        description: 'Something within content of the panel',
        other: ' And an other one'
      },
      {
        name: 'Item 3',
        description: 'Something within content of the panel',
        other: ' And an other one'
      },
      {
        name: 'Item 4',
        description: 'Something within content of the panel',
        other: ' And an other one'
      }
    ];

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
  <tl-accordion
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'">
    
    <tl-accordion-panel
      *ngFor="let item of this.list">
      
      <ng-container
        panelHeader>
        {{ item.name }}
      </ng-container>
        
      <ng-container
        panelContent>
        
        <div
          class="tl-margined">
          {{ item.description }}
        </div>
        <div
          class="tl-margined">
          {{ item.other }}
        </div>
        
      </ng-container>
      
    </tl-accordion-panel>    
  </tl-accordion>
    `;
  }
  
  /**
   * Handles item selection
   */
  public onSelectItem(item: any){
    this.alertService.raiseInfo('Select item ' + item.payload);
  }

}
