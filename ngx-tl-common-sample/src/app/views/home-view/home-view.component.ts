import { Component, OnInit } from '@angular/core';
import { TlAlertService } from 'ngx-tl-common';
import { Router } from '@angular/router';

@Component({
  selector: 'tls-home-view',
  host: { 'class' : 'tl-padded-page'},
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  /**
   * Status of the 'get started' button
   */
  public getStartedButtonStatus: number = -1;

  constructor(
      private alertService: TlAlertService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  public onClickStart(){
    this.getStartedButtonStatus = 0;
    setTimeout(() => {
     this.router.navigate(['/getting-started']);
    }, 1000);
  }
  
  
  public selectionMode:boolean = false;
   /**
   * Handles click on the button
   */
  public onClickButton(){
    this.selectionMode = ! this.selectionMode;
  }
    
}
