import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'app-tl-popup-overlay-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-popup-overlay-view.component.html',
  styleUrls: ['./tl-popup-overlay-view.component.css']
})
export class TlPopupOverlayViewComponent implements OnInit {

  public htmlCode: string;
  
  public tsCode: string = `
  /**
   * Binded display status of the popup
   */
  public displayPopup: boolean = false;
    `;
    
  /**
   * Binded display status of the popup
   */
  public displayPopup: boolean = false;

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
  <tl-popup-overlay
    [display]="this.displayPopup"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    (close)="this.displayPopup = false">
    
    <!-- Popup to display -->
    <tl-card
      [tlStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
      [size]="'` + this.componentPreferenceService.style.size + `'"
      [padding]="20">
      
      <div
        class="tl-big-bottom-margined">
        A hedgehog is any of the spiny mammals of the subfamily Erinaceinae, 
        in the eulipotyphlan family Erinaceidae.<br/><br/>
        There are seventeen species of 
        hedgehog in five genera found through parts of Europe, Asia, and Africa, 
        and in New Zealand by introduction.
      </div>
      
    </tl-card>
  
  </tl-popup-overlay>
    `;
  }

}
