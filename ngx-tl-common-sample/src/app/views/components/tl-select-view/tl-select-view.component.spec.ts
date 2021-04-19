import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlSelectViewComponent } from './tl-select-view.component';

describe('TlSelectViewComponent', () => {
  let component: TlSelectViewComponent;
  let fixture: ComponentFixture<TlSelectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlSelectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlSelectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
