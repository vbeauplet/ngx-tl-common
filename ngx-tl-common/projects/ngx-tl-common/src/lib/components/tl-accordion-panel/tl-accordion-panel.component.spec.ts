import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlAccordionPanelComponent } from './tl-accordion-panel.component';

describe('TlAccordionPanelComponent', () => {
  let component: TlAccordionPanelComponent;
  let fixture: ComponentFixture<TlAccordionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlAccordionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlAccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
