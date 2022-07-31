import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconTogglerViewComponent } from './tl-icon-toggler-view.component';

describe('TlIconTogglerViewComponent', () => {
  let component: TlIconTogglerViewComponent;
  let fixture: ComponentFixture<TlIconTogglerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlIconTogglerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconTogglerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
