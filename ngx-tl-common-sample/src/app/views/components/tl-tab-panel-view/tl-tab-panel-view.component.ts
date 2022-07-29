import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-tab-panel-view',
  host: { 'class' : 'tl-left-aligned-padded-page'},
  templateUrl: './tl-tab-panel-view.component.html',
  styleUrls: ['./tl-tab-panel-view.component.css']
})
export class TlTabPanelViewComponent implements OnInit {
  
  
  public htmlCode: string;
    
  public tsCode: string = `
  /**
   * Counter
   */
  public counter: number = 4;
  
  /**
   * Tab data
   */
  public data: any = [
    {
      name: 'Device 1',
      image: '/assets/img/herisson.jpg',
      description: 'Fantastic device 1'
    },
    {
      name: 'Device 2',
      image: '/assets/img/herisson.jpg',
      description: 'Fantastic device 2'
    },
    {
      name: 'Device 3',
      image: '/assets/img/herisson.jpg',
      description: 'Fantastic device 3'
    }
  ];

  /**
   * Add tab
   */
  public addTab(){

    this.counter++;
    this.data.push({
      name: 'Device ' + this.counter,
      icon: 'C',
      description: 'Fantastic device ' + this.counter
    });
  }
    `;
    
  /**
   * Counter
   */
  public counter: number = 4;
  
  /**
   * Tab data
   */
  public data: any = [
    {
      name: 'Device 1',
      image: '/assets/img/herisson.jpg',
      description: 'Fantastic device 1'
    },
    {
      name: 'Device 2',
      image: '/assets/img/herisson.jpg',
      description: 'Fantastic device 2'
    },
    {
      name: 'Device 3',
      image: '/assets/img/herisson.jpg',
      description: 'Fantastic device 3'
    }
  ];

  /**
   * Add tab
   */
  public addTab(){

    this.counter++;
    this.data.push({
      name: 'Device ' + this.counter,
      icon: 'C',
      description: 'Fantastic device ' + this.counter
    });
  }

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
  <tl-tab-panel
    [size]="'` + this.componentPreferenceService.style.size + `'"
    [tlStyle]="'` + this.componentPreferenceService.style.tlStyle + `'"
    [selectedTab]="'Open'"
    [hasCloseTabButtons]="true"
    [hasAddTabButton]="true"
    [shrinkableTabs]="true"
    (addTab)="this.addTab()">

    <tl-tab
      *ngFor="let device of this.data"
      [title]="device.name"
      [imageUrl]="(device.image != undefined)?device.image:''"
      [icon]="(device.icon != undefined)?device.icon:''">

      {{ device.description }}

    </tl-tab>

  </tl-tab-panel>
    `;
  }


}
