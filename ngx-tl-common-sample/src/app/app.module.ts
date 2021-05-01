import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTlCommonModule } from 'ngx-tl-common';
import { TlSearchMenuComponent } from './components/tl-search-menu/tl-search-menu.component';
import { TlTreeComponent, TlTreeNodeComponent } from './components/tl-tree/tl-tree.component';
import { TlTogglerViewComponent } from './views/components/tl-toggler-view/tl-toggler-view.component';
import { TlStepperViewComponent } from './views/components/tl-stepper-view/tl-stepper-view.component';
import { TlColorPickerViewComponent } from './views/components/tl-color-picker-view/tl-color-picker-view.component';
import { TlAccordionViewComponent } from './views/components/tl-accordion-view/tl-accordion-view.component';
import { TlActionCenterViewComponent } from './views/components/tl-action-center-view/tl-action-center-view.component';
import { TlActiveImageViewComponent } from './views/components/tl-active-image-view/tl-active-image-view.component';
import { TlButtonViewComponent } from './views/components/tl-button-view/tl-button-view.component';
import { TlButtonTogglerViewComponent } from './views/components/tl-button-toggler-view/tl-button-toggler-view.component';
import { TlProgressBarViewComponent } from './views/components/tl-progress-bar-view/tl-progress-bar-view.component';
import { TlIconMiniatureViewComponent } from './views/components/tl-icon-miniature-view/tl-icon-miniature-view.component';
import { TlIconMiniatureTogglerViewComponent } from './views/components/tl-icon-miniature-toggler-view/tl-icon-miniature-toggler-view.component';
import { TlIndicatorViewComponent } from './views/components/tl-indicator-view/tl-indicator-view.component';
import { TlInteractiveInputViewComponent } from './views/components/tl-interactive-input-view/tl-interactive-input-view.component';
import { TlLoaderViewComponent } from './views/components/tl-loader-view/tl-loader-view.component';
import { TlMiniatureViewComponent } from './views/components/tl-miniature-view/tl-miniature-view.component';
import { TlNukiCardViewComponent } from './views/components/tl-nuki-card-view/tl-nuki-card-view.component';
import { TlOutlinedActiveImageViewComponent } from './views/components/tl-outlined-active-image-view/tl-outlined-active-image-view.component';
import { TlSearchBarViewComponent } from './views/components/tl-search-bar-view/tl-search-bar-view.component';
import { TlShapeBlockViewComponent } from './views/components/tl-shape-block-view/tl-shape-block-view.component';
import { TlSpinnerViewComponent } from './views/components/tl-spinner-view/tl-spinner-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { GettingStartedViewComponent } from './views/getting-started-view/getting-started-view.component';
import { ThemeVariablesViewComponent } from './views/theme/theme-variables-view/theme-variables-view.component';
import { DefaultStaticThemeViewComponent } from './views/theme/default-static-theme-view/default-static-theme-view.component';
import { OwnStaticThemeViewComponent } from './views/theme/own-static-theme-view/own-static-theme-view.component';
import { DynamicThemeViewComponent } from './views/theme/dynamic-theme-view/dynamic-theme-view.component';
import { InitMenuServiceViewComponent } from './views/menu/init-menu-service-view/init-menu-service-view.component';
import { TlInlineImagePickerViewComponent } from './views/components/tl-inline-image-picker-view/tl-inline-image-picker-view.component';
import { TlImagePickerViewComponent } from './views/components/tl-image-picker-view/tl-image-picker-view.component';
import { TlSelectViewComponent } from './views/components/tl-select-view/tl-select-view.component';
import { TlIconMiniatureSelectViewComponent } from './views/components/tl-icon-miniature-select-view/tl-icon-miniature-select-view.component';
import { TlSizesComponent } from './components/glossary/tl-sizes/tl-sizes.component';
import { ComponentSampleComponent } from './components/component-sample/component-sample.component';
import { DefaultCompanionMenuViewComponent } from './views/menu/default-companion-menu-view/default-companion-menu-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TlSearchMenuComponent,
    TlTreeComponent,
    TlTreeNodeComponent,
    TlTogglerViewComponent,
    TlStepperViewComponent,
    TlColorPickerViewComponent,
    TlAccordionViewComponent,
    TlActionCenterViewComponent,
    TlActiveImageViewComponent,
    TlButtonViewComponent,
    TlButtonTogglerViewComponent,
    TlProgressBarViewComponent,
    TlIconMiniatureViewComponent,
    TlIconMiniatureTogglerViewComponent,
    TlIndicatorViewComponent,
    TlInteractiveInputViewComponent,
    TlLoaderViewComponent,
    TlMiniatureViewComponent,
    TlNukiCardViewComponent,
    TlOutlinedActiveImageViewComponent,
    TlSearchBarViewComponent,
    TlShapeBlockViewComponent,
    TlSpinnerViewComponent,
    HomeViewComponent,
    GettingStartedViewComponent,
    ThemeVariablesViewComponent,
    DefaultStaticThemeViewComponent,
    OwnStaticThemeViewComponent,
    DynamicThemeViewComponent,
    InitMenuServiceViewComponent,
    TlInlineImagePickerViewComponent,
    TlImagePickerViewComponent,
    TlSelectViewComponent,
    TlIconMiniatureSelectViewComponent,
    TlSizesComponent,
    ComponentSampleComponent,
    DefaultCompanionMenuViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTlCommonModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
