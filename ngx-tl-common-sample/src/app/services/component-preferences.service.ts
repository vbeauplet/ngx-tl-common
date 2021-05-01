import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITlSelectProposal } from 'ngx-tl-common';

export interface IComponentStyle{
  tlStyle: string,
  subTlStyle: string;
  size: string,
  shape: string
  subShape: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class ComponentPreferencesService {

  /**
   * Binded basic custom style of the component sample
   */
  public style: IComponentStyle;
  
  /**
   * Subject to emit new component style every time is it modified
   */
  public styleSubject: Subject<IComponentStyle> = new Subject<IComponentStyle>();
  
  /**
   * Binded size property
   * tl-neumorphic by default
   */
  public size:  string = 'tl-half-responsive';

  constructor() {
    this.reset();
  }
  
  /**
   * Resets component to initial values
   */
  reset(){
    this.style = {
      tlStyle: 'tl-neumorphic',
      subTlStyle: 'tl-soft-transparent',
      size: 'tl-half-responsive',
      shape: 'round',
      subShape: 'round',
      color: 'tl-outline'
    }
  }
  
  /**
   * Handles selection of a tlStyle
   */
  public onSelectStyle(tlStyleProposal: ITlSelectProposal){
    this.style.tlStyle = tlStyleProposal.name;
    this.styleSubject.next();
  }
  
  
  /**
   * Handles selection of a sub-tlStyle
   */
  public onSelectSubStyle(tlStyleProposal: ITlSelectProposal){
    this.style.subTlStyle = tlStyleProposal.name;
    this.styleSubject.next();
  }
  
  /**
   * Handles selection of a size
   */
  public onSelectSize(sizeProposal: ITlSelectProposal){
    this.style.size = sizeProposal.name;
    this.styleSubject.next();
  }
  
  /**
   * Handles selection of a shape
   */
  public onSelectShape(shapeProposal: ITlSelectProposal){
    this.style.shape = shapeProposal.name;
    this.styleSubject.next();
  }
  
  
  /**
   * Handles selection of a sub-shape
   */
  public onSelectSubShape(shapeProposal: ITlSelectProposal){
    this.style.subShape = shapeProposal.name;
    this.styleSubject.next();
  }
  
  
  /**
   * Handles selection of a color
   */
  public onSelectColor(colorProposal: ITlSelectProposal){
    this.style.color = colorProposal.name;
    this.styleSubject.next();
  }
}
