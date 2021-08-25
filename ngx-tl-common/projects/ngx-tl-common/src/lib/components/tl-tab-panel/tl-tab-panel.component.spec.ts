import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTabPanelComponent } from './tl-tab-panel.component';

describe('TlTabPanelComponent', () => {
  let component: TlTabPanelComponent;
  let fixture: ComponentFixture<TlTabPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlTabPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
