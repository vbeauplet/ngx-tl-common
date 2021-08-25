import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildOwnMenuViewComponent } from './build-own-menu-view.component';

describe('BuildOwnMenuViewComponent', () => {
  let component: BuildOwnMenuViewComponent;
  let fixture: ComponentFixture<BuildOwnMenuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildOwnMenuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildOwnMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
