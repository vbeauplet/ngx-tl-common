import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-progress-bar-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-progress-bar-view.component.html',
  styleUrls: ['./tl-progress-bar-view.component.css']
})
export class TlProgressBarViewComponent implements OnInit {

  /**
   * Current progress state
   */
  public current: number = 0;
  
  /**
   * Tells if progress process is in success
   */
  public success: boolean = true;

  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Current progress state
   */
  public current: number = 0;
  
  /**
   * Tells if progress process is in success
   */
  public success: boolean = true;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.current = 1;
    }, 1000);
    
    setTimeout(() => {
      this.current = 3;
      
    }, 3000);
    
    setTimeout(() => {
      this.current = 7;
      this.success = false;
    }, 5000);
    
    setTimeout(() => {
      this.current = 10;
    }, 10000);
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
    
    // Handle component
    setTimeout(() => {
      this.current = 1;
    }, 1000);
    
    setTimeout(() => {
      this.current = 3;
      
    }, 3000);
    
    setTimeout(() => {
      this.current = 7;
      this.success = false;
    }, 5000);
    
    setTimeout(() => {
      this.current = 10;
    }, 10000);
  }
  
  /**
   * Refreshes HTML Code
   */
  public refreshHtmlCode(){
    this.htmlCode = `
  <tl-progress-bar
    [total]="10"
    [current]="this.current"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [color]="(this.success)?'tl-success':'tl-failure'">
  </tl-progress-bar>
    `;
  }
  
  /**
   * Handles item selection
   */
  public onSelectItem(item: any){
    this.alertService.raiseInfo('Select item ' + item.payload);
  }

}
