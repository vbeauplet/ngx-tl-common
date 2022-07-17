import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent, merge, of, Subscription, timer } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Directive({ 
  selector: '[longPress]' 
})
export class TlLongClickDirective {

  private keepClickSubscribe: Subscription;
  private longClickCooldown: boolean  = false;
  private longClickCooldownDuration: number  = 3000;
  threshold = 500;
  
  @Output()
  keepClick = new EventEmitter();

  @Output()
  longClick = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const mousedown = fromEvent<MouseEvent>(
      elementRef.nativeElement,
      'mousedown'
    ).pipe(
      filter((event) => event.button == 0), // Only allow left button (Primary button)
      map((event) => true) // turn on threshold counter
    );
    const touchstart = fromEvent(elementRef.nativeElement, 'touchstart').pipe(
      map(() => true)
    );
    const touchEnd = fromEvent(elementRef.nativeElement, 'touchend').pipe(
      map(() => false)
    );
    const mouseup = fromEvent<MouseEvent>(window, 'mouseup').pipe(
      filter((event) => event.button == 0), // Only allow left button (Primary button)
      map(() => false) // reset threshold counter
    );
    this.keepClickSubscribe = merge(mousedown, mouseup, touchstart, touchEnd)
      .pipe(
        switchMap((state) => (state ? timer(this.threshold, 200) : of(null))),
        filter((value) => value)
      )
      .subscribe(() => {
        this.keepClick.emit()
        if(!this.longClickCooldown){
          this.longClick.emit();
          this.longClickCooldown = true;
          setTimeout(() => {
            this.longClickCooldown = false;
          }, this.longClickCooldownDuration)
        }
      });
  }

  ngOnDestroy(): void {
    if (this.keepClickSubscribe) {
      this.keepClickSubscribe.unsubscribe();
    }
  }

}