import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTlCommonModule } from 'ngx-tl-common';
import { TlTogglerViewComponent } from './views/components/tl-toggler-view/tl-toggler-view.component';
import { TlStepperViewComponent } from './views/components/tl-stepper-view/tl-stepper-view.component';
import { TlColorPickerViewComponent } from './views/components/tl-color-picker-view/tl-color-picker-view.component';
import { TlAccordionViewComponent } from './views/components/tl-accordion-view/tl-accordion-view.component';
import { TlActionCenterViewComponent } from './views/components/tl-action-center-view/tl-action-center-view.component';
import { TlActiveImageViewComponent } from './views/components/tl-active-image-view/tl-active-image-view.component';
import { TlButtonViewComponent } from './views/components/tl-button-view/tl-button-view.component';
import { TlButtonTogglerViewComponent } from './views/components/tl-button-toggler-view/tl-button-toggler-view.component';
import { TlCalendarViewComponent } from './views/components/tl-calendar-view/tl-calendar-view.component';
import { TlDatePickerViewComponent } from './views/components/tl-date-picker-view/tl-date-picker-view.component';
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
import { TlInputViewComponent } from './views/components/tl-input-view/tl-input-view.component';
import { TlImagePickerViewComponent } from './views/components/tl-image-picker-view/tl-image-picker-view.component';
import { TlSelectViewComponent } from './views/components/tl-select-view/tl-select-view.component';
import { TlIconMiniatureSelectViewComponent } from './views/components/tl-icon-miniature-select-view/tl-icon-miniature-select-view.component';
import { TlSizesComponent } from './components/glossary/tl-sizes/tl-sizes.component';
import { ComponentSampleComponent } from './components/component-sample/component-sample.component';
import { DefaultCompanionMenuViewComponent } from './views/menu/default-companion-menu-view/default-companion-menu-view.component';
import { TlThemeSwitcherViewComponent } from './views/theme/tl-theme-switcher-view/tl-theme-switcher-view.component';
import { TlStatefulButtonViewComponent } from './views/components/tl-stateful-button-view/tl-stateful-button-view.component';
import { TlTextStatefulButtonViewComponent } from './views/components/tl-text-stateful-button-view/tl-text-stateful-button-view.component';
import { TlSquareIconViewComponent } from './views/components/tl-square-icon-view/tl-square-icon-view.component';
import { TlStringPickerViewComponent } from './views/components/tl-string-picker-view/tl-string-picker-view.component';
import { TlCardViewComponent } from './views/components/tl-card-view/tl-card-view.component';
import { TlActiveMiniatureViewComponent } from './views/components/tl-active-miniature-view/tl-active-miniature-view.component';
import { UseAlertServiceViewComponent } from './views/alert/use-alert-service-view/use-alert-service-view.component';
import { TlAlertViewComponent } from './views/alert/tl-alert-view/tl-alert-view.component';
import { TlPopupOverlayViewComponent } from './views/components/tl-popup-overlay-view/tl-popup-overlay-view.component';
import { TlTreeViewComponent } from './views/components/tl-tree-view/tl-tree-view.component';
import { TlImageCardComponent } from './components/tl-image-card/tl-image-card.component';
import { TlImageCardViewComponent } from './views/components/tl-image-card-view/tl-image-card-view.component';
import { BuildOwnMenuViewComponent } from './views/menu/build-own-menu-view/build-own-menu-view.component';
import { TlTimelineCardViewComponent } from './views/components/tl-timeline-card-view/tl-timeline-card-view.component';
import { CssViewComponent } from './views/css/css-view/css-view.component';
import { TlTabPanelViewComponent } from './views/components/tl-tab-panel-view/tl-tab-panel-view.component';
import { TlRaterViewComponent } from './views/components/tl-rater-view/tl-rater-view.component';



import { TlsSearchMenuComponent } from './components/tl-search-menu/tl-search-menu.component';
import { TlsTreeComponent } from './components/tl-tree/tl-tree.component';
import { TlsSearchBarComponent } from './components/tl-search-bar/tl-search-bar.component';
import { TlsTextStatefulButtonComponent } from './components/tl-text-stateful-button/tl-text-stateful-button.component';
import { TlsTreeNodeComponent } from './components/tl-tree/tl-tree.component';
import { PulsarLogoComponent } from './components/pulsar-logo/pulsar-logo.component';
import { TlClickableIconComponent } from './components/tl-clickable-icon/tl-clickable-icon.component';
import { TlChipViewComponent } from './views/components/tl-chip-view/tl-chip-view.component';
import { TlChipsInputViewComponent } from './views/components/tl-chips-input-view/tl-chips-input-view.component';
import { TlFormViewComponent } from './views/components/tl-form-view/tl-form-view.component';
import { TlsAlertComponent } from './components/tl-alert/tl-alert.component';
import { TlClickableIconViewComponent } from './views/components/tl-clickable-icon-view/tl-clickable-icon-view.component';
import { TlTableComponent } from './components/tl-table/tl-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TlTogglerViewComponent,
    TlStepperViewComponent,
    TlColorPickerViewComponent,
    TlAccordionViewComponent,
    TlActionCenterViewComponent,
    TlActiveImageViewComponent,
    TlButtonViewComponent,
    TlButtonTogglerViewComponent,
    TlCalendarViewComponent,
    TlDatePickerViewComponent,
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
    DefaultCompanionMenuViewComponent,
    TlThemeSwitcherViewComponent,
    TlStatefulButtonViewComponent,
    TlTextStatefulButtonViewComponent,
    TlSquareIconViewComponent,
    TlStringPickerViewComponent,
    TlCardViewComponent,
    TlActiveMiniatureViewComponent,
    UseAlertServiceViewComponent,
    TlAlertViewComponent,
    TlPopupOverlayViewComponent,
    TlTreeViewComponent,
    TlImageCardComponent,
    TlImageCardViewComponent,
    BuildOwnMenuViewComponent,
    TlTimelineCardViewComponent,
    CssViewComponent,
    TlTabPanelViewComponent,
    TlRaterViewComponent,
    TlsSearchMenuComponent,
    TlsTreeComponent,
    TlsTreeNodeComponent,
    TlsTextStatefulButtonComponent,
    TlsSearchBarComponent,
    PulsarLogoComponent,
    TlClickableIconComponent,
    TlInputViewComponent,
    TlChipViewComponent,
    TlChipsInputViewComponent,
    TlFormViewComponent,
    TlsAlertComponent,
    TlClickableIconViewComponent,
    TlTableComponent
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
