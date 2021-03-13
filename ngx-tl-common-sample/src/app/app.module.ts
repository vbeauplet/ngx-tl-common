import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTlCommonModule } from 'ngx-tl-common';
import { TlSearchMenuComponent } from './components/tl-search-menu/tl-search-menu.component';
import { TlTreeComponent, TlTreeNodeComponent } from './components/tl-tree/tl-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TlSearchMenuComponent,
    TlTreeComponent,
    TlTreeNodeComponent
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
