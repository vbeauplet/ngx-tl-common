import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-image-card-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-image-card-view.component.html',
  styleUrls: ['./tl-image-card-view.component.css']
})
export class TlImageCardViewComponent implements OnInit {


  public htmlCode: string;

  constructor(
      private alertService: TlAlertService,
      public componentPreferenceService: ComponentPreferencesService
    ) { }

  ngOnInit(): void {
    // Refresh configurable HTML code
    this.refreshHtmlCode();
    
    // Set default shape to square
    this.componentPreferenceService.style.shape = 'square';
    
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
  <tl-nuki-card
    [imageSrc]="'/assets/img/herisson.jpg'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'">
    
    <div
      class="tl-big-bottom-margined tl-title">
      Hedgehog
    </div>
    
    <div
      class="tl-big-bottom-margined">
      A hedgehog is any of the spiny mammals of the subfamily Erinaceinae, 
      in the eulipotyphlan family Erinaceidae.<br/><br/>
      There are seventeen species of 
      hedgehog in five genera found through parts of Europe, Asia, and Africa, 
      and in New Zealand by introduction.
    </div>
    
  </tl-nuki-card>
    `;
  }
}
