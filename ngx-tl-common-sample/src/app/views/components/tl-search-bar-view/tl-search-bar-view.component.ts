import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';

@Component({
  selector: 'tls-search-bar-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-search-bar-view.component.html',
  styleUrls: ['./tl-search-bar-view.component.css']
})
export class TlSearchBarViewComponent implements OnInit {


  public htmlCode: string = `
  <tl-search-bar
    [size]="'tl-near-half-responsive'"
    [placeholder]="'Search'"
    (searchValue)="this.onSearchValue($event)">
  </tl-search-bar>
    `;
    
  public tsCode: string = `
  /**
   * Handles value search
   */
  public onSearchValue(value: string){
    this.alertService.raiseInfo('Search with value: ' + value);
  }
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
  }
  
  /**
   * Handles value search
   */
  public onSearchValue(value: string){
    this.alertService.raiseInfo('Search with value: ' + value);
  }


}
