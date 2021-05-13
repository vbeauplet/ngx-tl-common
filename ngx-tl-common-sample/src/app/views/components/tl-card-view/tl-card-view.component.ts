import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-card-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-card-view.component.html',
  styleUrls: ['./tl-card-view.component.css']
})
export class TlCardViewComponent implements OnInit {

  public htmlCode: string;

  public htmlCode2: string;
    
  public tsCode: string = `
  /**
   * Handles click on an active icon of the action bar
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on button ' + icon);
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
  <tl-card
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [padding]="20">
    
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
    
  </tl-card>
    `;
    
    this.htmlCode2 = `
  <tl-card
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [title]="'Hedgehog'"
    [actionCenterStyle]="'` + this.componentPreferenceService.style.subTlStyle + `'"
    [activeIcons]="[
      {
        name: 'play',
        icon: '{',
        label: 'Play',
        color: 'tl-success'
      },
      {
        name: 'pause',
        icon: '|',
        label: 'Pause'
      },
      {
        name: 'stop',
        icon: '~',
        label: 'Stop',
        color: 'tl-failure'
      }
    ]"
    (clickIcon)="this.onClickIcon($event)">
    
    <div
      class="tl-big-margined">
      A hedgehog is any of the spiny mammals of the subfamily Erinaceinae, 
      in the eulipotyphlan family Erinaceidae.<br/><br/>
      There are seventeen species of 
      hedgehog in five genera found through parts of Europe, Asia, and Africa, 
      and in New Zealand by introduction.
    </div>
    
  </tl-card>
    `;
  }
  
  
  /**
   * Handles click on an active icon of the action bar
   */
  public onClickIcon(icon: string){
    this.alertService.raiseInfo('Click on icon ' + icon);
  }


}
