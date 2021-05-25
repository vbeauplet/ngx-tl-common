import { Component } from '@angular/core';
import { TlMenuService, TlAlertService, ITlTheme, TlThemeService } from 'ngx-tl-common';

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
  
  
  private themes: ITlTheme[] = [
    {
      name: 'light',
      label: 'Light',
      
      mainBgColor: '#e2e9ee',
      mainBgPattern: 'none',
      elementBgColor: '#e2e9ee',
      secondaryBgColor: '#2F7045',
      menuBgColor: '#31383f',
      transparentBgColor: 'rgba(255,255,255,0.4)',
      sharpTransparentBgColor: 'rgba(255,255,255,0.7)',
      
      mainContentColor: '#212529',
      secondaryContentColor: 'white',
      menuContentColor: '#F2E9EB',
      outlineContentColor: '#FFA101',
      successContentColor: 'green',
      failureContentColor: 'red',
      neutralContentColor: 'orange',
      softContentColor: '#5b7480',
      
      lightShadowColor: '#ffffff',
      darkShadowColor: '#b5babe',
      sharpLightShadowColor: '#ffffff',
      sharpDarkShadowColor: '#b3b8bc',
      
      lightDomeColor: '#f2f9ff',
      darkDomeColor: '#cbd2d6'
    },
    {
      name: 'watercolor',
      label: 'Pattern',
      
      mainBgColor: '#e2e9ee',
      mainBgPattern: 'url("./assets/img/watercolor_pattern.png")',
      elementBgColor: '#e2e9ee',
      secondaryBgColor: '#2F7045',
      menuBgColor: '#31383f',
      transparentBgColor: 'rgba(255,255,255,0.4)',
      sharpTransparentBgColor: 'rgba(255,255,255,0.55)',
      
      mainContentColor: '#212529',
      secondaryContentColor: 'white',
      menuContentColor: '#F2E9EB',
      outlineContentColor: '#E0475B',
      successContentColor: 'green',
      failureContentColor: 'red',
      neutralContentColor: 'orange',
      softContentColor: '#5b7480',
      
      lightShadowColor: '#ffffff',
      darkShadowColor: '#b5babe',
      sharpLightShadowColor: '#ffffff',
      sharpDarkShadowColor: '#b3b8bc',
      
      lightDomeColor: '#f2f9ff',
      darkDomeColor: '#cbd2d6'
    },
    {
      name: 'dark',
      label: 'Dark',
      
      mainBgColor: '#31383f',
      mainBgPattern: 'none',
      elementBgColor: '#31383f',
      secondaryBgColor: '#8CBDB9',
      menuBgColor: '#31383f',
      transparentBgColor: 'rgba(0,0,0,0.3)',
      sharpTransparentBgColor: 'rgba(0,0,0,0.7)',
      
      mainContentColor: '#F2E9EB',
      menuContentColor: '#F2E9EB',
      secondaryContentColor: '#212529',
      outlineContentColor: '#FFA101',
      successContentColor: 'green',
      failureContentColor: 'red',
      neutralContentColor: 'orange',
      softContentColor: '#5b7480',
      
      lightShadowColor: '#3C444D',
      darkShadowColor: '#262C31',
      sharpLightShadowColor: '#3E474F',
      sharpDarkShadowColor: '#24292F',
      
      lightDomeColor: '#343C43',
      darkDomeColor: '#2C3239'
    }
  ];
  
  constructor(
    public themeService: TlThemeService,
    public menuService: TlMenuService,
    public alertService: TlAlertService
  ){
    // Init theme service
    this.themeService.init(this.themes, 'dark');
    
    // Init menu service
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
                label: 'Use a default Static Theme',
                icon: 'a',
                route: '/theme/default-themes'
              },
              {
                id: 'build-static-theme',
                label: 'Build your own Static Theme',
                icon: 'a',
                route: '/theme/own-static-theme'
              },
              {
                id: 'dynamic-theme',
                label: 'Set-up Dynamic Theme Service',
                icon: 'a',
                route: '/theme/dynamic-theme'
              },
              {
                id: 'tl-theme-switcher',
                label: 'Theme-switcher companion component',
                icon: 'a',
                route: '/theme/tl-theme-switcher'
              }
            ]
        },
        {
          id: 'menu',
          label: 'Menu Module',
          icon: 'a',
          subItems: [
              {
                id: 'init-menu-service',
                label: 'Set-up Menu Service',
                icon: 'a',
                route: '/menu/menu-service'
              },
              {
                id: 'default-menu-components',
                label: 'Use a default Menu Component',
                icon: 'a',
                route: '/menu/default-menu-components'
              },
              {
                id: 'build-menu-component',
                label: 'Build your own Menu Component',
                icon: 'a',
                route: '/menu/own-menu-component'
              }
            ]
        },
        {
          id: 'alert',
          label: 'Alert Module',
          icon: 'a',
          subItems: [
              {
                id: 'alert-service',
                label: 'Alert Service',
                icon: 'a',
                route: '/alert/alert-service'
              },
              {
                id: 'tl-alert',
                label: 'tl-alert companion component',
                icon: 'a',
                route: '/alert/tl-alert'
              },
              {
                id: 'tl-alert-timeline',
                label: 'tl-alert-timeline companion component',
                icon: 'a',
                route: '/menu/own-menu-component'
              }
            ]
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
                id: 'tl-active-miniature',
                label: 'tl-active-miniature',
                route: '/components/tl-active-miniature',
                icon: 'a'
              },
              {
                id: 'tl-button',
                label: 'tl-button',
                route: '/components/tl-button',
                icon: 'a'
              },
              {
                id: 'tl-card',
                label: 'tl-card',
                route: '/components/tl-card',
                icon: 'a'
              },
              {
                id: 'tl-color-picker',
                label: 'tl-color-picker',
                route: '/components/tl-color-picker',
                icon: 'a'
              },
              {
                id: 'tl-icon-miniature-select',
                label: 'tl-icon-miniature-select',
                route: '/components/tl-icon-miniature-select',
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
                id: 'tl-image-card',
                label: 'tl-image-card',
                route: '/components/tl-image-card',
                icon: 'a'
              },
              {
                id: 'tl-imaged-item-picker-select',
                label: 'tl-imaged-item-picker',
                route: '/components/tl-imaged-item-picker',
                icon: 'a'
              },
              {
                id: 'tl-indicator',
                label: 'tl-indicator',
                route: '/components/tl-indicator',
                icon: 'a'
              },
              {
                id: 'tl-inline-imaged-item-picker-select',
                label: 'tl-inline-imaged-item-picker',
                route: '/components/tl-inline-imaged-item-picker',
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
                id: 'tl-popup-overlay',
                label: 'tl-popup-overlay',
                route: '/components/tl-popup-overlay',
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
                id: 'tl-select',
                label: 'tl-select',
                route: '/components/tl-select',
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
                id: 'tl-square-icon',
                label: 'tl-square-icon',
                route: '/components/tl-square-icon',
                icon: 'a'
              },
              {
                id: 'tl-stateful-button',
                label: 'tl-stateful-button',
                route: '/components/tl-stateful-button',
                icon: 'a'
              },
              {
                id: 'tl-stepper',
                label: 'tl-stepper',
                route: '/components/tl-stepper',
                icon: 'a'
              },
              {
                id: 'tl-string-picker',
                label: 'tl-string-picker',
                route: '/components/tl-string-picker',
                icon: 'a'
              },
              {
                id: 'tl-text-stateful-button',
                label: 'tl-text-stateful-button',
                route: '/components/tl-text-stateful-button',
                icon: 'a'
              },
              {
                id: 'tl-toggler',
                label: 'tl-toggler',
                route: '/components/tl-toggler',
                icon: 'a'
              },
              {
                id: 'tl-tree',
                label: 'tl-tree',
                route: '/components/tl-tree',
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
