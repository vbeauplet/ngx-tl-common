import { Injectable } from '@angular/core';

import { ITlTheme } from '../interfaces/tl-theme.interface';

/**
 * Theme service handles the theme of the application:
 * - Services to handle theme selection among the list of app themes
 * - Initial theme retrieving from local storage
 *
 * This service shall be initialized at depending app level before it is used (init() service)
 *
 * @author vbeauplet
 */
@Injectable({
  providedIn: 'root'
})
export class TlThemeService {

  /**
   * Predefined themes which can be used via the changedTheme method
   * Initialized at service construction
   */
  public themes: ITlTheme[] = [];
  
  /**
   * Default theme
   */
  public defaultTheme: ITlTheme;
  
  /**
   * Currently applied theme
   */
  public currentTheme: ITlTheme;
  
  /**
   * Tells if the them service has been initialized yet
   */
  public isInitialized: boolean = false;

  constructor() {}
  
  /**
   * Initializes the themes service from:
   * - The provided list of app themes
   * - The default theme to apply at init time if no local/distant storage
   */
  public init(themes: ITlTheme[], defaultTheme: string){
    
    // Set application themes
    this.themes = themes;
    
    // Initalize default them name
    let defaultThemeName: string = defaultTheme; 
    
    
    // Retrieve theme preference stored in local storage, if any
    let storedTheme = localStorage.getItem('currentTheme');
    if(storedTheme != undefined && storedTheme != null){
      defaultThemeName = storedTheme;
    }
    
    // Apply initial theme
    this.changeTheme(defaultThemeName);
    
    // Tell theme service is initialized
    this.isInitialized = true;
  }
  
  
  /**
   * Changes the theme choosing from public theme names
   */
  public changeTheme(themeName: string){
    
    // Check theme is different before applying it
    if(this.currentTheme == undefined || this.currentTheme.name !== themeName){
      
      // Retrieve theme
      let theme = this.getTheme(themeName);
      
      if(theme != null){
        
        // Set current theme
        this.currentTheme = theme;
        
        // Apply theme
        this.applyTheme(theme);
        
        // Store current theme
        localStorage.setItem('currentTheme', theme.name);
      }
    }
  }
  
  /**
   * Applies a theme
   */
  public applyTheme(theme: ITlTheme){
      
    document.documentElement.style.setProperty('--main-bg-color', theme.mainBgColor);
    document.documentElement.style.setProperty('--main-bg-pattern', theme.mainBgPattern);
    document.documentElement.style.setProperty('--element-bg-color', theme.elementBgColor);
    document.documentElement.style.setProperty('--secondary-bg-color', theme.secondaryBgColor);
    document.documentElement.style.setProperty('--menu-bg-color', theme.menuBgColor);
    document.documentElement.style.setProperty('--transparent-bg-color', theme.transparentBgColor);
    document.documentElement.style.setProperty('--sharp-transparent-bg-color', theme.sharpTransparentBgColor);
    
    document.documentElement.style.setProperty('--main-content-color', theme.mainContentColor);
    document.documentElement.style.setProperty('--secondary-content-color', theme.secondaryContentColor);
    document.documentElement.style.setProperty('--menu-content-color', theme.menuContentColor);
    document.documentElement.style.setProperty('--outline-content-color', theme.outlineContentColor);
    document.documentElement.style.setProperty('--success-content-color', theme.successContentColor);
    document.documentElement.style.setProperty('--failure-content-color', theme.failureContentColor);
    document.documentElement.style.setProperty('--neutral-content-color', theme.neutralContentColor);
    document.documentElement.style.setProperty('--soft-content-color', theme.softContentColor);
    
    document.documentElement.style.setProperty('--light-shadow-color', theme.lightShadowColor);
    document.documentElement.style.setProperty('--dark-shadow-color', theme.darkShadowColor);
    document.documentElement.style.setProperty('--sharp-light-shadow-color', theme.sharpLightShadowColor);
    document.documentElement.style.setProperty('--sharp-dark-shadow-color', theme.sharpDarkShadowColor);
    
    document.documentElement.style.setProperty('--light-dome-color', theme.lightDomeColor);
    document.documentElement.style.setProperty('--dark-dome-color', theme.darkDomeColor);
  }
  
  /**
   * Gets a registered theme by theme name, null otherwise
   */
  public getTheme(themeName: string): ITlTheme{
    for(let i = 0; i < this.themes.length; i++){
      if(this.themes[i].name === themeName){
        return this.themes[i];
      } 
    } 
    return null;
  }
}
