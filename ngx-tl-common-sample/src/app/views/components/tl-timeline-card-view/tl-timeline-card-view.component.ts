import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-timeline-card-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-timeline-card-view.component.html',
  styleUrls: ['./tl-timeline-card-view.component.css']
})
export class TlTimelineCardViewComponent implements OnInit {

  public date: number = Date.now() - 2000;

  public htmlCode: string;

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
  <tl-timeline-card
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [date]="this.date">
    
    A hedgehog is any of the spiny mammals of the subfamily Erinaceinae, 
    in the eulipotyphlan family Erinaceidae.<br/><br/>
    There are seventeen species of 
    hedgehog in five genera found through parts of Europe, Asia, and Africa, 
    and in New Zealand by introduction.
    
  </tl-timeline-card>
    `;
  }
}
