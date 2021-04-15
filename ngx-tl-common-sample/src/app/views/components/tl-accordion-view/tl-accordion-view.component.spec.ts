import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlAccordionViewComponent } from './tl-accordion-view.component';

describe('TlAccordionViewComponent', () => {
  let component: TlAccordionViewComponent;
  let fixture: ComponentFixture<TlAccordionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlAccordionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlAccordionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
