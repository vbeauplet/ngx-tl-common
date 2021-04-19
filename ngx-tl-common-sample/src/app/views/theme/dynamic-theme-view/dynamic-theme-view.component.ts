import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-dynamic-theme-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './dynamic-theme-view.component.html',
  styleUrls: ['./dynamic-theme-view.component.css']
})
export class DynamicThemeViewComponent implements OnInit {

  public themeStructureCode: string = `
public sampleTheme: ITlTheme = {
    name: 'light',
    label: 'Light',
    
    mainBgColor: '#e2e9ee',
    mainBgPattern: 'none',
    elementBgColor: '#e2e9ee',
    secondaryBgColor: '#2F7045',
    menuBgColor: '#31383f',
    transparentBgColor: 'rgba(255,255,255,0.4)',
    sharpTransparentBgColor: 'rgba(255,255,255,0.7)',
    
    mainContentColor: '#212529',
    secondaryContentColor: 'white',
    menuContentColor: '#F2E9EB',
    outlineContentColor: '#FFA101',
    successContentColor: 'green',
    failureContentColor: 'red',
    neutralContentColor: 'orange',
    softContentColor: '#80A1AF',
    
    lightShadowColor: '#ffffff',
    darkShadowColor: '#b5babe',
    sharpLightShadowColor: '#ffffff',
    sharpDarkShadowColor: '#b3b8bc',
    
    lightDomeColor: '#f2f9ff',
    darkDomeColor: '#cbd2d6'
  };
    `;
    
   public themeServiceImportCode: string = `
import { TlThemeService } from 'ngx-tl-common';

 constructor(
      public router: Router,
      public themeService: TlThemeService,
      ...) {}
    `;
    
    public dynamicThemesArrayCode: string = `
public appThemes:  ITlTheme[] = [
    theme1,
    theme2,
    ...
  ];
    `;
    
        
    public dynamicThemesInitCode: string = `
ngOnInit() {
  // Initialize app themes
  this.themeService.init(appThemes, theme1);
  
  ...
}
    `;
    
        public dynamicThemesChangeCode: string = `
this.themeService.changeTheme(theme1Name);
    `;

  constructor() { }

  ngOnInit(): void {
  }

}
