import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlActionCenterComponent } from './tl-action-center.component';

describe('TlActionCenterComponent', () => {
  let component: TlActionCenterComponent;
  let fixture: ComponentFixture<TlActionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlActionCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlActionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
