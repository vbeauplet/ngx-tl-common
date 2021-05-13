import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlSearchMenuComponent } from './tl-search-menu.component';

describe('TlSearchMenuComponent', () => {
  let component: TlSearchMenuComponent;
  let fixture: ComponentFixture<TlSearchMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlSearchMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlSearchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
