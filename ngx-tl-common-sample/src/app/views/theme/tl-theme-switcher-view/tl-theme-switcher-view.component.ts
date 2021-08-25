import { Component, OnInit } from '@angular/core';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'app-tl-theme-switcher-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-theme-switcher-view.component.html',
  styleUrls: ['./tl-theme-switcher-view.component.css']
})
export class TlThemeSwitcherViewComponent implements OnInit {

  public htmlCode: string;

  constructor(
      public componentPreferencesService: ComponentPreferencesService
    ) { }

  ngOnInit(): void {
    // Refresh configurable HTML code
    this.refreshHtmlCode();
    
    // Subscribe to any change on component sample style
    this.componentPreferencesService.styleSubject.subscribe(() => {
        this.refreshHtmlCode();
      });
  }
  
  /**
   * Refreshes HTML Code
   */
  public refreshHtmlCode(){
    this.htmlCode = `
  <tl-theme-switcher
    [tlContainerNature]="true"
    [tlStyle]="'` + this.componentPreferencesService.style.tlStyle + `'"
    [size]="'` + this.componentPreferencesService.style.size + `'">
  </tl-theme-switcher>
    `;
  }

}
