import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlInputViewComponent } from './tl-input-view.component';

describe('TlInputViewComponent', () => {
  let component: TlInputViewComponent;
  let fixture: ComponentFixture<TlInputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlInputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlInputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
