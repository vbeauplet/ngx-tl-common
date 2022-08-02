import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlClickableIconViewComponent } from './tl-clickable-icon-view.component';

describe('TlClickableIconViewComponent', () => {
  let component: TlClickableIconViewComponent;
  let fixture: ComponentFixture<TlClickableIconViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlClickableIconViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlClickableIconViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
