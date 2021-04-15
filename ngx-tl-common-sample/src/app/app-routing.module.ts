import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'getting-started', component: GettingStartedViewComponent },
  { path: 'theme/theme-variables', component: ThemeVariablesViewComponent },
  { path: 'theme/default-themes', component: DefaultStaticThemeViewComponent },
  { path: 'components/tl-accordion', component: TlAccordionViewComponent },
  { path: 'components/tl-action-center', component: TlActionCenterViewComponent },
  { path: 'components/tl-active-image', component: TlActiveImageViewComponent },
  { path: 'components/tl-button', component: TlButtonViewComponent },
  { path: 'components/tl-button-toggler', component: TlButtonTogglerViewComponent },
  { path: 'components/tl-icon-miniature', component: TlIconMiniatureViewComponent },
  { path: 'components/tl-icon-miniature-toggler', component: TlIconMiniatureTogglerViewComponent },
  { path: 'components/tl-indicator', component: TlIndicatorViewComponent },
  { path: 'components/tl-interactive-input', component: TlInteractiveInputViewComponent },
  { path: 'components/tl-loader', component: TlLoaderViewComponent },
  { path: 'components/tl-miniature', component: TlMiniatureViewComponent },
  { path: 'components/tl-nuki-card', component: TlNukiCardViewComponent },
  { path: 'components/tl-outlined-active-image', component: TlOutlinedActiveImageViewComponent },
  { path: 'components/tl-progress-bar', component: TlProgressBarViewComponent },
  { path: 'components/tl-search-bar', component: TlSearchBarViewComponent },
  { path: 'components/tl-shape-block', component: TlShapeBlockViewComponent },
  { path: 'components/tl-spinner', component: TlSpinnerViewComponent },
  { path: 'components/tl-toggler', component: TlTogglerViewComponent },
  { path: 'components/tl-stepper', component: TlStepperViewComponent },
  { path: 'components/tl-color-picker', component: TlColorPickerViewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
