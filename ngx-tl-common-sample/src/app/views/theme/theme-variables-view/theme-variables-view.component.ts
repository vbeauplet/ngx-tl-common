import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-theme-variables-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './theme-variables-view.component.html',
  styleUrls: ['./theme-variables-view.component.css']
})
export class ThemeVariablesViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
