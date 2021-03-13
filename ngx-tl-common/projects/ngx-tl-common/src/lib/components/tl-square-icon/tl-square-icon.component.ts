import { Component, OnInit, Input } from '@angular/core';

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tl-square-icon',
  templateUrl: './tl-square-icon.component.html',
  styleUrls: ['./tl-square-icon.component.scss']
})
export class TlSquareIconComponent implements OnInit {

  /**
   * Size of the square icon, in px
   */
  @Input() size: number = 40;
  
  /**
   * Color of the icon
   * Shall fit app color theme for content. Possible values are "tl-main", "tl-soft", 'tl-failure', "tl-neutral", "tl-success", "tl-outline"...
   * "tl-inherit" by default
   */
  @Input() color: string = 'tl-inherit';
  
  /**
   * Mandatory: Icon to use, from font package literal
   */
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Computes the font size
   */
  public getFontSize(): number {
    return this.size * 5/3;
  }
  
  /**
   * Computes the line height
   */
  public getLineHeight(): number {
    return this.size * 1/6;
  }

}
