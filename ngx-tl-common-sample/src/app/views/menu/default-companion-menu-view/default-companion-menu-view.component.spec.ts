import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCompanionMenuViewComponent } from './default-companion-menu-view.component';

describe('DefaultCompanionMenuViewComponent', () => {
  let component: DefaultCompanionMenuViewComponent;
  let fixture: ComponentFixture<DefaultCompanionMenuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCompanionMenuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCompanionMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
