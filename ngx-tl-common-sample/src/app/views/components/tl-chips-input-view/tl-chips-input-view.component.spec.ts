import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlChipsInputViewComponent } from './tl-chips-input-view.component';

describe('TlChipsInputViewComponent', () => {
  let component: TlChipsInputViewComponent;
  let fixture: ComponentFixture<TlChipsInputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlChipsInputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlChipsInputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
