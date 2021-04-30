import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentPreferencesService {

  public tlStyle: string = 'tl-neumorphic';
  
  public size:  string = 'tl-half-responsive';

  constructor() { }
}
