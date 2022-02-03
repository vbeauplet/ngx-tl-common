import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconTogglerComponent } from './tl-icon-toggler.component';

describe('TlBoucingIconTogglerComponent', () => {
  let component: TlIconTogglerComponent;
  let fixture: ComponentFixture<TlIconTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlIconTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
