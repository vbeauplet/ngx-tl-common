export class Sorter {
  
  private sortOrder: number = 1;
  
  private collator: Intl.Collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  
  constructor(){}
  
  public startSort(property: string, order: string){
    if(order == 'desc'){
      this.sortOrder = -1;
    }
    return (a: any, b: any) => {
      return this.collator.compare(a[property], b[property]) * this.sortOrder;
    }
  }
  
  
}