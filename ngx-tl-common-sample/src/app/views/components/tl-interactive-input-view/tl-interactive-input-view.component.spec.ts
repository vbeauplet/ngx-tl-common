import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlInteractiveInputViewComponent } from './tl-interactive-input-view.component';

describe('TlInteractiveInputViewComponent', () => {
  let component: TlInteractiveInputViewComponent;
  let fixture: ComponentFixture<TlInteractiveInputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlInteractiveInputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlInteractiveInputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
