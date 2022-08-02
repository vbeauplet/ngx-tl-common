import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlClickableIconComponent } from './tl-clickable-icon.component';

describe('TlClickableIconComponent', () => {
  let component: TlClickableIconComponent;
  let fixture: ComponentFixture<TlClickableIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlClickableIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlClickableIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
