import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TlThemeService } from '../../services/tl-theme.service';
import { ITlTheme } from '../../interfaces/tl-theme.interface';

@Component({
  selector: 'tl-theme-switcher',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle',
      '[class.tl-container-flex-block]' : 'this.tlContainerNature',
      '[class.tl-big-padded]' : 'this.tlContainerNature',
      '[class.tl-flex-block]' : '!this.tlContainerNature'
    },
  templateUrl: './tl-theme-switcher.component.html',
  styleUrls: ['./tl-theme-switcher.component.css']
})
export class TlThemeSwitcherComponent implements OnInit {

  /**
   * Container size, in the Tl-size system
   * Tl-near-full by default
   */
  @Input() size: string = 'tl-near-full';
  
  /**
   * Tells if compoennt has a container nature and can be styled
   * False by default
   */
  @Input() tlContainerNature: boolean = true;
  
  /**
   * Container tl-style
   * Only matters if theme swither has a container nature
   */
  @Input() tlStyle: string = 'tl-soft-transparent';
  
  /**
   * Event which is emitted wheme theme is changed with theme switcher component
   */
  @Output() selectTheme: EventEmitter<string> = new EventEmitter<string>();
  
  /**
   * Proposed theme color items
   */
  public themeColorItems: any[];
  
  /**
   * Initially selected theme color item
   */
  public initialSelectedThemeColorItem: any;


  constructor(
      public themeService: TlThemeService
    ) { }

  ngOnInit(): void {
    // Compute color items
    this.themeColorItems = this.computeInitialThemeColorItems();
    
    // Compute initially selected theme color item
    for(let item of this.themeColorItems){
      if(item.payload == this.themeService.currentTheme.name){
        this.initialSelectedThemeColorItem = item;
        break;
      }
    }
  }
  
  /**
   * Handles theme selection
   */
  public onSelectTheme(themeName: string){
    console.log(themeName);
    
    // Emit event
    this.selectTheme.next(themeName);
    
    // Update theme service
    this.themeService.changeTheme(themeName);
  }
  
  /**
   * Gets possible Color Items corresponding to all registered themes
   */
  public computeInitialThemeColorItems(): any[]{
    let result: any[] = [];
    for (let i = 0; i < this.themeService.themes.length; i++){
      result.push(this.toColorItem(this.themeService.themes[i]));
    }
    return result;
  }
  
  /**
   * Convert theme object to ColorItem object
   */
  public toColorItem(theme: ITlTheme): any {
    return {
        payload: theme.name,
        label: theme.label,
        colors: [
          theme.mainBgColor,
          theme.secondaryBgColor,
          theme.outlineContentColor,
          theme.mainContentColor
        ]
      };
  }

}
