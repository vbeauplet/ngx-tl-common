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

  constructor(
      private alertService: TlAlertService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  public onClickStart(){
    this.router.navigate(['/getting-started']);
  }
}
