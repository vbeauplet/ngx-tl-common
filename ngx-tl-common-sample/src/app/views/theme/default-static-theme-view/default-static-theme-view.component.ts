import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-default-static-theme-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './default-static-theme-view.component.html',
  styleUrls: ['./default-static-theme-view.component.css']
})
export class DefaultStaticThemeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
