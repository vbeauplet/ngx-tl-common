import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlLogoMenuComponent } from './tl-logo-menu.component';

describe('TlLogoMenuComponent', () => {
  let component: TlLogoMenuComponent;
  let fixture: ComponentFixture<TlLogoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlLogoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlLogoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
