import { Component } from '@angular/core';
import { TlMenuService, TlAlertService } from 'ngx-tl-common';

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
    public menuService: TlMenuService,
    public alertService: TlAlertService
  ){
      
    this.menuService.init([
        {
          id: 'getting-started',
          label: 'Getting Started',
          icon: 'a',
          route: '/getting-started'
        },
        {
          id: 'theme',
          label: 'Theme Module',
          icon: 'a',
          subItems: [
              {
                id: 'theme-variables',
                label: 'Theme Variables',
                icon: 'a',
                route: '/theme/theme-variables'
              },
              {
                id: 'static-theme',
                label: 'Default Static Themes',
                icon: 'a',
                route: '/theme/default-themes'
              },
              {
                id: 'build-static-theme',
                label: 'Build your own Static Theme',
                icon: 'a'
              },
              {
                id: 'dynamic-theme',
                label: 'Set-up Dynamic Theme Service',
                icon: 'a'
              }
            ]
        },
        {
          id: 'css',
          label: 'CSS Structures',
          icon: 'a',
          subItems: []
        },
        {
          id: 'components',
          label: 'Components',
          icon: 'a',
          subItems: [
              {
                id: 'tl-accordion',
                label: 'tl-accordion',
                route: '/components/tl-accordion',
                icon: 'a'
              },
              {
                id: 'tl-action-center',
                label: 'tl-action-center',
                route: '/components/tl-action-center',
                icon: 'a'
              },
              {
                id: 'tl-active-image',
                label: 'tl-active-image',
                route: '/components/tl-active-image',
                icon: 'a'
              },
              {
                id: 'tl-button',
                label: 'tl-button',
                route: '/components/tl-button',
                icon: 'a'
              },
              {
                id: 'tl-button-toggler',
                label: 'tl-button-toggler',
                route: '/components/tl-button-toggler',
                icon: 'a'
              },
              {
                id: 'tl-icon-miniature',
                label: 'tl-icon-miniature',
                route: '/components/tl-icon-miniature',
                icon: 'a'
              },
              {
                id: 'tl-icon-miniature-toggler',
                label: 'tl-icon-miniature-toggler',
                route: '/components/tl-icon-miniature-toggler',
                icon: 'a'
              },
              {
                id: 'tl-indicator',
                label: 'tl-indicator',
                route: '/components/tl-indicator',
                icon: 'a'
              },
              {
                id: 'tl-interactive-input',
                label: 'tl-interactive-input',
                route: '/components/tl-interactive-input',
                icon: 'a'
              },
              {
                id: 'tl-loader',
                label: 'tl-loader',
                route: '/components/tl-loader',
                icon: 'a'
              },
              {
                id: 'tl-miniature',
                label: 'tl-miniature',
                route: '/components/tl-miniature',
                icon: 'a'
              },
              {
                id: 'tl-nuki-card',
                label: 'tl-nuki-card',
                route: '/components/tl-nuki-card',
                icon: 'a'
              },
              {
                id: 'tl-outlined-active-image',
                label: 'tl-outlined-active-image',
                route: '/components/tl-outlined-active-image',
                icon: 'a'
              },
              {
                id: 'tl-progress-bar',
                label: 'tl-progress-bar',
                route: '/components/tl-progress-bar',
                icon: 'a'
              },
              {
                id: 'tl-search-bar',
                label: 'tl-search-bar',
                route: '/components/tl-search-bar',
                icon: 'a'
              },
              {
                id: 'tl-shape-block',
                label: 'tl-shape-block',
                route: '/components/tl-shape-block',
                icon: 'a'
              },
              {
                id: 'tl-spinner',
                label: 'tl-spinner',
                route: '/components/tl-spinner',
                icon: 'a'
              },
              {
                id: 'tl-stepper',
                label: 'tl-stepper',
                route: '/components/tl-stepper',
                icon: 'a'
              },
              {
                id: 'tl-toggler',
                label: 'tl-toggler',
                route: '/components/tl-toggler',
                icon: 'a'
              },
              {
                id: 'tl-color-picker',
                label: 'tl-color-picker',
                route: '/components/tl-color-picker',
                icon: 'a'
              }
            ]
        },
        {
          id: 'services',
          label: 'Services',
          icon: 'a',
          subItems: [
              {
                id: 'tl-menu-service',
                label: 'TlMenuService',
                icon: 'a'
              },
              {
                id: 'tl-theme-service',
                label: 'TlThemeService',
                icon: 'a'
              },
              {
                id: 'tl-alert-service',
                label: 'TlAlertService',
                icon: 'a'
              }
            ]
        },
        {
          id: 'glossary',
          label: 'Glossary',
          icon: 'a',
          subItems: [
              {
                id: 'structure-classes',
                label: 'CSS Structures',
                icon: 'a'
              },
              {
                id: 'color-system',
                label: 'Color System',
                icon: 'a'
              },
              {
                id: 'size-system',
                label: 'Size System',
                icon: 'a'
              },
              {
                id: 'style-system',
                label: 'Style System',
                icon: 'a'
              }
            ]
        }
      ]);
  }
}
