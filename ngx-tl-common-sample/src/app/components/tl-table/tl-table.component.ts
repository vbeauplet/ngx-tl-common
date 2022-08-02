import { Component, OnInit, Input } from '@angular/core';
import { IColSpec } from 'ngx-tl-common/lib/components/tl-tree/tl-tree.component';
import { Sorter } from './sorter';

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
  public concatenateColumnSizes() {
    let sizes: string = '';
    
    // Columns
    for (const colSpec of this.columns){
      sizes += ' ' + colSpec.size + 'fr';
    }
    
    return sizes;
  }
  
  public sort(property: string){
    let sorter: Sorter = new Sorter();
    this.data.sort(sorter.startSort(property, 'asc'));
  }

}
