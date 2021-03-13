import { Component } from '@angular/core';
import { TlMenuService } from 'ngx-tl-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-tl-common-sample';
  
  public code = `<tl-tree-to
  [size]="'tl-half'"
  [data]="this.menuService.menuItems"
  [searchFieldName]="'label'"
  [selectionFieldName]="'label'"
  [nestedItemsFieldName]="'subItems'"
  [selectionValue]="'tl-toto'"
  [hasHeaderRow]="false"
  [columns]="[
      {
        fieldName: 'label',
        title: 'Item',
        size: 2,
        editable: false
      },
      {
        fieldName: 'id',
        title: 'Id',
        size: 2,
        editable: false
      },
      {
        fieldName: 'icon',
        title: 'Icon',
        size: 1,
        editable: true
      }
    ]">
</tl-tree-to>`;
  
  
  constructor(
    public menuService: TlMenuService
  ){
    this.menuService.init([
        {
          id: 'tl-accordion',
          label: 'tl-accordion',
          icon: 'a',
          subItems: [
              {
                id: 'tl-accordion2',
                label: 'tl-accordion2',
                icon: 'a',
                subItems: [
                    {
                      id: 'tl-accordion2',
                      label: 'tl-toto',
                      icon: 'a'
                    },
                    {
                      id: 'tl-stepper2',
                      label: 'tl-titi',
                      icon: 'a'
                    }
                  ]
              },
              {
                id: 'tl-stepper2',
                label: 'tl-stepper2',
                icon: 'a'
              }
            ]
        },
        {
          id: 'tl-stepper',
          label: 'tl-stepper',
          icon: 'a'
        },
        {
          id: 'tl-string-picker',
          label: 'tl-string-picker',
          icon: 'a',
          subItems: [
              {
                id: 'tl-accordion2',
                label: 'tl-accordion2',
                icon: 'a'
              },
              {
                id: 'tl-stepper2',
                label: 'tl-stepper2',
                icon: 'a'
              }
            ]
        },
        {
          id: 'tl-menu',
          label: 'tl-menu',
          icon: 'a'
        }
      ]);
  }
}
