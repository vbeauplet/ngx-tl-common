import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlSearchBarViewComponent } from './tl-search-bar-view.component';

describe('TlSearchBarViewComponent', () => {
  let component: TlSearchBarViewComponent;
  let fixture: ComponentFixture<TlSearchBarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlSearchBarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlSearchBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
