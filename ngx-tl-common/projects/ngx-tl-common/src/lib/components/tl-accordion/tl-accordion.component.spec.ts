import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlAccordionComponent } from './tl-accordion.component';

describe('TlAccordionComponent', () => {
  let component: TlAccordionComponent;
  let fixture: ComponentFixture<TlAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
