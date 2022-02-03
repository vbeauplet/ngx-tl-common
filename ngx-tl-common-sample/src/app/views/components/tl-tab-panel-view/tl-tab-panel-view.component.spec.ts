import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTabPanelViewComponent } from './tl-tab-panel-view.component';

describe('TlTabPanelViewComponent', () => {
  let component: TlTabPanelViewComponent;
  let fixture: ComponentFixture<TlTabPanelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlTabPanelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTabPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
