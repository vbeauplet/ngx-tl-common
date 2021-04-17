import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlActiveMiniatureComponent } from './tl-active-miniature.component';

describe('TlActiveMiniatureComponent', () => {
  let component: TlActiveMiniatureComponent;
  let fixture: ComponentFixture<TlActiveMiniatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlActiveMiniatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlActiveMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
