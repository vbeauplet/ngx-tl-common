import { Injectable } from '@angular/core';

/**
 * @author vbeauplet
 *
 * Bunch of useful static services for tl-based elements
 */
@Injectable({
  providedIn: 'root'
})
export class TlHelpersService {

  constructor() { }
  
  /**
   * Generates a unique ID key
   */
  public generateId(){
    const groups: string[] = [];
    for(let i = 0; i < 6; i++){
      const s4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      groups.push(s4);
    }
    return groups.join('-');
  }
  
  /**
   * Tells if the provided string starts with one of the provided array values
   */
  public startsFrom(value: string, array: string[]): boolean{
    for(let currentValue of array){
      if(value.startsWith(currentValue)){
        return true;
      }
    }
    return false;
  }
}
