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
   * Registered themes which can be used via the changedTheme method
   * Shall be initialized with the init() method
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
  
  /*
   * ngx-tl-common predefined themes 
   */
   
  /**
   * Light Theme
   */
  public lightTheme: ITlTheme = {
      name: 'light',
      label: 'Light',
      
      mainBgColor: '#e2e9ee',
      mainBgPattern: 'none',
      elementBgColor: '#e2e9ee',
      secondaryBgColor: '#2F7045',
      menuBgColor: '#31383f',
      transparentBgColor: 'rgba(255,255,255,0.4)',
      sharpTransparentBgColor: 'rgba(255,255,255,0.7)',
      glassBgColor: 'rgba(255,255,255,0.5)',
      
      mainContentColor: '#212529',
      secondaryContentColor: 'white',
      menuContentColor: '#F2E9EB',
      outlineContentColor: '#FFA101',
      successContentColor: 'green',
      failureContentColor: 'red',
      neutralContentColor: 'orange',
      softContentColor: '#5b7480',
      
      lightShadowColor: '#ffffff',
      darkShadowColor: '#b5babe',
      sharpLightShadowColor: '#ffffff',
      sharpDarkShadowColor: '#b3b8bc',
      
      lightDomeColor: '#f2f9ff',
      darkDomeColor: '#cbd2d6',
      
      titleFont: 'norwester',
      subtitleFont: 'norwester',
      mainFont: 'helvetica',
      
      primaryStyle: 'tl-neumorphic',
      secondaryStyle: 'tl-glassmorphic',
      preferedShape: 'tl-round'
    };
    
  /**
   * Dark Theme
   */
  public darkTheme: ITlTheme = {
      name: 'dark',
      label: 'Dark',
      
      mainBgColor: '#31383f',
      mainBgPattern: 'none',
      elementBgColor: '#31383f',
      secondaryBgColor: '#8CBDB9',
      menuBgColor: '#31383f',
      transparentBgColor: 'rgba(0,0,0,0.3)',
      sharpTransparentBgColor: 'rgba(0,0,0,0.7)',
      glassBgColor: 'rgba(0,0,0,0.4)',
      
      mainContentColor: '#F2E9EB',
      menuContentColor: '#F2E9EB',
      secondaryContentColor: '#212529',
      outlineContentColor: '#FFA101',
      successContentColor: 'green',
      failureContentColor: 'red',
      neutralContentColor: 'orange',
      softContentColor: '#5b7480',
      
      lightShadowColor: '#3C444D',
      darkShadowColor: '#262C31',
      sharpLightShadowColor: '#3E474F',
      sharpDarkShadowColor: '#24292F',
      
      lightDomeColor: '#343C43',
      darkDomeColor: '#2C3239',
      
      titleFont: 'norwester',
      subtitleFont: 'norwester',
      mainFont: 'helvetica',
      
      primaryStyle: 'tl-neumorphic',
      secondaryStyle: 'tl-glassmorphic',
      preferedShape: 'tl-round'
    };

  /**
   * Fresh Theme
   */
  public freshTheme: ITlTheme = {
      name: 'fresh',
      label: 'Fresh',
      
      mainBgColor: '#e2e9ee',
      mainBgPattern: 'url("./assets/img/watercolor_pattern.png")',
      elementBgColor: '#e2e9ee',
      secondaryBgColor: '#2F7045',
      menuBgColor: '#31383f',
      transparentBgColor: 'rgba(255,255,255,0.4)',
      sharpTransparentBgColor: 'rgba(255,255,255,0.7)',
      glassBgColor: 'rgba(255,255,255,0.5)',
      
      mainContentColor: '#212529',
      secondaryContentColor: 'white',
      menuContentColor: '#F2E9EB',
      outlineContentColor: '#E0475B',
      successContentColor: 'green',
      failureContentColor: 'red',
      neutralContentColor: 'orange',
      softContentColor: '#5b7480',
      
      lightShadowColor: '#ffffff',
      darkShadowColor: '#b5babe',
      sharpLightShadowColor: '#ffffff',
      sharpDarkShadowColor: '#b3b8bc',
      
      lightDomeColor: '#f2f9ff',
      darkDomeColor: '#cbd2d6',
      
      titleFont: 'pacifico',
      subtitleFont: 'pacifico',
      mainFont: 'helvetica',
      
      primaryStyle: 'tl-neumorphic',
      secondaryStyle: 'tl-glassmorphic',
      preferedShape: 'tl-round'
    };

  constructor() {}
  
  /**
   * Initializes the themes service from:
   * - The provided list of app themes
   * - The default theme to apply at init time if no local/distant storage of latest used theme
   */
  public init(themes: ITlTheme[], defaultTheme: string){
    
    // Set application themes
    this.themes = themes;
    
    // Initalize default them name
    let defaultThemeName: string = defaultTheme; 
    
    
    // Retrieve theme preference stored in local storage, if any
    let storedTheme = localStorage.getItem('currentTheme');
    if(storedTheme != undefined && storedTheme != null && this.getTheme(storedTheme) != null){
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
    document.documentElement.style.setProperty('--glass-bg-color', theme.glassBgColor);
    
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
    
    
    
    document.documentElement.style.setProperty('--title-font', theme.titleFont);
    document.documentElement.style.setProperty('--subtitle-font', theme.subtitleFont);   
    document.documentElement.style.setProperty('--main-font', theme.mainFont);     
    
    document.documentElement.style.setProperty('--primary-style', theme.primaryStyle);
    document.documentElement.style.setProperty('--secondary-style', theme.secondaryStyle);
    document.documentElement.style.setProperty('--prefered-shape', theme.preferedShape);
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
