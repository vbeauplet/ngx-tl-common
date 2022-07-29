import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-search-bar-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-search-bar-view.component.html',
  styleUrls: ['./tl-search-bar-view.component.css']
})
export class TlSearchBarViewComponent implements OnInit {


  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Handles value search
   */
  public onSearchValue(value: string){
    this.alertService.raiseInfo('Search with value: ' + value);
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
  <tl-search-bar
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [placeholder]="'Search'"
    (searchValue)="this.onSearchValue($event)">
  </tl-search-bar>
    `;
  }
  
  /**
   * Handles value search
   */
  public onSearchValue(value: string){
    this.alertService.raiseInfo('Search with value: ' + value);
  }


}
