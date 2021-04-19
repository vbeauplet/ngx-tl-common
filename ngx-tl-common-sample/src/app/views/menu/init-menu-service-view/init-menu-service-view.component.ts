import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-init-menu-service-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './init-menu-service-view.component.html',
  styleUrls: ['./init-menu-service-view.component.css']
})
export class InitMenuServiceViewComponent implements OnInit {

  public menuItemsInitCode: string = `
  public menuItems: ITlMenuItem[] = [
    {
      label:'Home',
      icon:'ï',
      route:'/activity'
    },
    {
      label:'Profil',
      icon:'+',
      route:'/profile'
    },
    {
      label:'Recettes',
      icon:'l',
      route:'/kitchen'
    },
    {
      label:'Plus',
      icon:'ö',
      subItems: [
        {
          label:'Créer une recette',
          icon:']',
          route:'/recipe/new'
        },
        {
          label:'Brouillons',
          icon:'l',
          route:'/draft'
        },
        {
          label:'Historique',
          icon:'t',
          route:'/history'
        },
        {
          label:'Ajouter un cuisinier',
          icon:'-',
          route:'/user/follow'
        }
      ]
    }
  ];
  `;
  
     public menuServiceImportCode: string = `
  import { TlThemeService } from 'ngx-tl-common';

  constructor(
      public router: Router,
      public themeService: TlThemeService,
      ...) {}
    `;
    
        public dynamicMenuInitCode: string = `
  ngOnInit() {
    // Initialize app themes
    this.themeService.init(appThemes, theme1);
    
    ...
  }
    `;

  constructor() { }

  ngOnInit(): void {
  }

}
