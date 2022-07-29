import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-tree-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-tree-view.component.html',
  styleUrls: ['./tl-tree-view.component.css']
})
export class TlTreeViewComponent implements OnInit {
  
  public sampleTreeData = [
    {
      id: 'parameter1',
      name: 'Parameter 1',
      description: ' Description of parameter 1',
      value: '16'
    },
    {
      id: 'parameter2',
      name: 'Parameter 2',
      description: ' Description of parameter 2',
      value: 'true',
      nestedParameters: [
        {
          id: 'parameter2_1',
          name: 'Parameter 2 > 1',
          description: ' Description of parameter 2_1',
          value: '35'
        },
        {
          id: 'parameter2_2',
          name: 'Parameter 2 > 2',
          description: ' Description of parameter 2_2',
          value: '36'
        },
        {
          id: 'parameter2_3',
          name: 'Parameter 2 > 3',
          description: ' Description of parameter 2_3',
          value: '36',
          nestedParameters: [
            {
              id: 'parameter2_3_1',
              name: 'Parameter 2 > 3 > 1',
              description: ' Description of parameter 2_3_1',
              value: '26'
            },
            {
              id: 'parameter2_3_2',
              name: 'Parameter 2 > 3 > 2',
              description: ' Description of parameter 2_3_2',
              value: '45'
            }
          ]
        }
      ]
    }
  ];
  
  public htmlCode: string;
    
  public tsCode: string = `
  public sampleTreeData = [
    {
      id: 'parameter1',
      name: 'Parameter 1',
      description: ' Description of parameter 1',
      value: '16'
    },
    {
      id: 'parameter2',
      name: 'Parameter 2',
      description: ' Description of parameter 2',
      value: 'true',
      nestedParameters: [
        {
          id: 'parameter2_1',
          name: 'Parameter 2 > 1',
          description: ' Description of parameter 2_1',
          value: '35'
        },
        {
          id: 'parameter2_2',
          name: 'Parameter 2 > 2',
          description: ' Description of parameter 2_2',
          value: '36'
        },
        {
          id: 'parameter2_3',
          name: 'Parameter 2 > 3',
          description: ' Description of parameter 2_3',
          value: '36',
          nestedParameters: [
            {
              id: 'parameter2_3_1',
              name: 'Parameter 2 > 3 > 1',
              description: ' Description of parameter 2_3_1',
              value: '26'
            },
            {
              id: 'parameter2_3_2',
              name: 'Parameter 2 > 3 > 2',
              description: ' Description of parameter 2_3_2',
              value: '45'
            }
          ]
        }
      ]
    }
  ];
  
  /**
   * Handles change of an editable tree value
   */
  public onChangeTreeValue(newTreeValue: any){
    this.alertService.raiseInfo(
      'Change field "' + newTreeValue.fieldName + '" of ' + newTreeValue.itemId + ' to the new value: ' + newTreeValue.value);
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
  <tl-tree
    [data]="this.sampleTreeData"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [hasHeaderRow]="true"
    [idFieldName]="'id'"
    [searchFieldName]="'name'"
    [nestedItemsFieldName]="'nestedParameters'"
    [columns]="[
        {
          fieldName: 'name',
          title: 'Name',
          size: 2,
          editable: false
        },
        {
          fieldName: 'description',
          title: 'Description',
          size: 2,
          editable: false
        },
        {
          fieldName: 'value',
          title: 'Value',
          size: 1,
          editable: true
        }
      ]"
    (changeTreeValue)="this.onChangeTreeValue($event)">
  </tl-tree>
    `;
  }
  
  /**
   * Handles change of an editable tree value
   */
  public onChangeTreeValue(newTreeValue: any){
    this.alertService.raiseInfo(
      'Change field "' + newTreeValue.fieldName + '" of ' + newTreeValue.itemId + ' to the new value: ' + newTreeValue.value);
  }

}
