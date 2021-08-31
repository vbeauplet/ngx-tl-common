import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TlAccordionPanelComponent } from './components/tl-accordion-panel/tl-accordion-panel.component';
import { TlAccordionComponent } from './components/tl-accordion/tl-accordion.component';
import { TlActionCenterComponent } from './components/tl-action-center/tl-action-center.component';
import { TlActiveImageComponent } from './components/tl-active-image/tl-active-image.component';
import { TlActiveMiniatureComponent } from './components/tl-active-miniature/tl-active-miniature.component';
import { TlAlertTimelineComponent } from './components/tl-alert-timeline/tl-alert-timeline.component';
import { TlButtonComponent } from './components/tl-button/tl-button.component';
import { TlButtonTogglerComponent } from './components/tl-button-toggler/tl-button-toggler.component';
import { TlCardComponent } from './components/tl-card/tl-card.component';
import { TlColorPickerComponent } from './components/tl-color-picker/tl-color-picker.component';
import { TlHamburgerComponent } from './components/tl-hamburger/tl-hamburger.component';
import { TlIconMiniatureComponent } from './components/tl-icon-miniature/tl-icon-miniature.component';
import { TlIconMiniatureTogglerComponent } from './components/tl-icon-miniature-toggler/tl-icon-miniature-toggler.component';
import { TlImagedItemPickerComponent } from './components/tl-imaged-item-picker/tl-imaged-item-picker.component';
import { TlIndicatorComponent } from './components/tl-indicator/tl-indicator.component';
import { TlInlineImagedItemPickerComponent } from './components/tl-inline-imaged-item-picker/tl-inline-imaged-item-picker.component';
import { TlInteractiveInputComponent } from './components/tl-interactive-input/tl-interactive-input.component';
import { TlLoaderComponent } from './components/tl-loader/tl-loader.component';
import { TlMiniatureComponent } from './components/tl-miniature/tl-miniature.component';
import { TlNukiCardComponent } from './components/tl-nuki-card/tl-nuki-card.component';
import { TlOutlinedActiveImageComponent } from './components/tl-outlined-active-image/tl-outlined-active-image.component';
import { TlProgressBarComponent } from './components/tl-progress-bar/tl-progress-bar.component';
import { TlSearchBarComponent } from './components/tl-search-bar/tl-search-bar.component';
import { TlShapeBlockComponent } from './components/tl-shape-block/tl-shape-block.component';
import { TlSpinnerComponent } from './components/tl-spinner/tl-spinner.component';
import { TlSquareIconComponent } from './components/tl-square-icon/tl-square-icon.component';
import { TlStatefulButtonComponent } from './components/tl-stateful-button/tl-stateful-button.component';
import { TlStepperComponent } from './components/tl-stepper/tl-stepper.component';
import { TlStringPickerComponent } from './components/tl-string-picker/tl-string-picker.component';
import { TlTabPanelComponent } from './components/tl-tab-panel/tl-tab-panel.component';
import { TlTabComponent } from './components/tl-tab-panel/tl-tab-panel.component';
import { TlTextStatefulButtonComponent } from './components/tl-text-stateful-button/tl-text-stateful-button.component';
import { TlThemeSwitcherComponent } from './components/tl-theme-switcher/tl-theme-switcher.component';
import { TlTimelineCardComponent } from './components/tl-timeline-card/tl-timeline-card.component';
import { TlTogglerComponent } from './components/tl-toggler/tl-toggler.component';
import { TlTreeComponent, TlTreeNodeComponent } from './components/tl-tree/tl-tree.component';
import { TlUserMiniatureComponent } from './components/tl-user-miniature/tl-user-miniature.component';
import { TlAlertComponent } from './overlay-components/tl-alert/tl-alert.component';
import { TlMobileMenuComponent } from './overlay-components/tl-mobile-menu/tl-mobile-menu.component';
import { TlOverlayComponent } from './overlay-components/tl-overlay/tl-overlay.component';
import { TlPopupOverlayComponent } from './overlay-components/tl-popup-overlay/tl-popup-overlay.component';
import { TlSearchMenuComponent } from './overlay-components/tl-search-menu/tl-search-menu.component';
import { TlDateAgoPipe } from './pipes/tl-date-ago.pipe';
import { TlSelectComponent } from './components/tl-select/tl-select.component';
import { TlIconMiniatureSelectComponent } from './components/tl-icon-miniature-select/tl-icon-miniature-select.component';
import { TlClickOutsideDirective } from './directives/tl-click-outside.directive';
import { TlRaterComponent } from './components/tl-rater/tl-rater.component';
 

@NgModule({ 
  declarations: [
    TlAccordionComponent,
    TlAccordionPanelComponent,
    TlActionCenterComponent,
    TlActiveImageComponent,
    TlActiveMiniatureComponent,
    TlAlertTimelineComponent,
    TlButtonComponent,
    TlButtonTogglerComponent,
    TlCardComponent,
    TlColorPickerComponent,
    TlHamburgerComponent,
    TlIconMiniatureComponent,
    TlIconMiniatureSelectComponent,
    TlIconMiniatureTogglerComponent,
    TlImagedItemPickerComponent,
    TlIndicatorComponent,
    TlInlineImagedItemPickerComponent,
    TlInteractiveInputComponent,
    TlLoaderComponent,
    TlMiniatureComponent,
    TlNukiCardComponent,
    TlOutlinedActiveImageComponent,
    TlProgressBarComponent,
    TlRaterComponent,
    TlSearchBarComponent,
    TlSelectComponent,
    TlShapeBlockComponent,
    TlSpinnerComponent,
    TlSquareIconComponent,
    TlStatefulButtonComponent,
    TlStepperComponent,
    TlStringPickerComponent,
    TlTabPanelComponent,
    TlTabComponent,
    TlTextStatefulButtonComponent,
    TlThemeSwitcherComponent,
    TlTimelineCardComponent,
    TlTogglerComponent,
    TlTreeComponent,
    TlTreeNodeComponent,
    TlUserMiniatureComponent,
    TlAlertComponent,
    TlMobileMenuComponent,
    TlOverlayComponent,
    TlPopupOverlayComponent,
    TlSearchMenuComponent,
    TlDateAgoPipe,
    TlClickOutsideDirective
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    TlAccordionComponent,
    TlAccordionPanelComponent,
    TlActionCenterComponent,
    TlActiveImageComponent,
    TlActiveMiniatureComponent,
    TlAlertTimelineComponent,
    TlButtonComponent,
    TlButtonTogglerComponent,
    TlCardComponent,
    TlColorPickerComponent,
    TlHamburgerComponent,
    TlIconMiniatureComponent,
    TlIconMiniatureSelectComponent,
    TlIconMiniatureTogglerComponent,
    TlImagedItemPickerComponent,
    TlIndicatorComponent,
    TlInlineImagedItemPickerComponent,
    TlInteractiveInputComponent,
    TlLoaderComponent,
    TlMiniatureComponent,
    TlNukiCardComponent,
    TlOutlinedActiveImageComponent,
    TlProgressBarComponent,
    TlRaterComponent,
    TlSearchBarComponent,
    TlSelectComponent,
    TlShapeBlockComponent,
    TlSpinnerComponent,
    TlSquareIconComponent,
    TlStatefulButtonComponent,
    TlStepperComponent,
    TlStringPickerComponent,
    TlTabPanelComponent,
    TlTabComponent,
    TlTextStatefulButtonComponent,
    TlThemeSwitcherComponent,
    TlTimelineCardComponent,
    TlTogglerComponent,
    TlTreeComponent,
    TlTreeNodeComponent,
    TlUserMiniatureComponent,
    TlAlertComponent,
    TlMobileMenuComponent,
    TlOverlayComponent,
    TlPopupOverlayComponent,
    TlSearchMenuComponent,
    TlDateAgoPipe,
    TlClickOutsideDirective
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NgxTlCommonModule {
}
