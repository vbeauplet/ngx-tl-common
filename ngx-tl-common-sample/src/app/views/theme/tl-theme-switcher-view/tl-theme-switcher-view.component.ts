import { Component, OnInit } from '@angular/core';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'app-tl-theme-switcher-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-theme-switcher-view.component.html',
  styleUrls: ['./tl-theme-switcher-view.component.css']
})
export class TlThemeSwitcherViewComponent implements OnInit {

  constructor(
    public componentPreferencesService: ComponentPreferencesService
  ) { }

  ngOnInit(): void {
  }

}
