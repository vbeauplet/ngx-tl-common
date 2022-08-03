import { Component, OnInit, Input } from '@angular/core';
import { Sorter } from './sorter';

/**
 * Column specification for the tree component.
 * Provided column spec shall follow this interface
 */
export interface IColSpec {
  fieldName: string;
  title: string;
  size: number // In fr;
  editable: boolean;
  editionType?: string; // May be toggler, select, input-text, date-picker
  editionPlaceholder?: string[]; // String proposals in case of a select or input edition type
  editionProposals?: any[]; // String proposals in case of a select edition type
  editionIcon?: string;
}

@Component({
  selector: 'tl-table',
  host: { 
      '[class]' : 'this.size + " tl-col-dir tl-hor-left tl-flex-block"' 
  },
  templateUrl: './tl-table.component.html',
  styleUrls: ['./tl-table.component.css']
})
export class TlTableComponent implements OnInit {

  /**
   * Table data: list of high level items which table is to be displayed
   */
  @Input() data: any[] = [];
  
  /**
   * Size of the table
   * 'tl-full' by default
   */
  @Input() size: string = 'tl-full';
  
  /**
   * Name of the field that uniquely identifies an item among others
   * 'name' by default
   */
  @Input() idFieldName: string = 'name';
  

  /**
   * List of all columns describing properties to be displayed within for each node item
   */
  @Input() columns: IColSpec[] = [];

  /**
   * Initial value content of the input
   */
  public _selectionMode: boolean = false;
  @Input() set selectionMode(value: boolean) {
     this._selectionMode = value;
     if(this._selectionMode != undefined){
       this.gridTemplateColumns = this.concatenateColumnSizes();
     }
  }

    /**
   * CSS grid property concatenated column sizes
   */
  public gridTemplateColumns: string = '';

  constructor() {}

  ngOnInit() {
    // Compute gridTemplateColumns at init time
    this.gridTemplateColumns = this.concatenateColumnSizes();
  }
  
  /**
   * Concatenate the column size to compute the value of the grid-template-columns css property of a row
   */
  public concatenateColumnSizes(): string {
    
    let sizes: string = '';
    
    // If selection mode is one, add selection bullets
    if(this._selectionMode){
      sizes = '30px ';
    }
    
    // Columns
    for (const colSpec of this.columns){
      sizes += ' ' + colSpec.size + 'fr';
    }
    
    return sizes;
  }
  
  /**
   * Sorts data from a given property
   */
  public sort(property: string){
    let sorter: Sorter = new Sorter();
    this.data.sort(sorter.startSort(property, 'asc'));
  }

}
