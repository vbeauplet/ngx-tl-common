import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTreeViewComponent } from './tl-tree-view.component';

describe('TlTreeViewComponent', () => {
  let component: TlTreeViewComponent;
  let fixture: ComponentFixture<TlTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
