import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlViewComponent } from './gl-view.component';

describe('GlViewComponent', () => {
  let component: GlViewComponent;
  let fixture: ComponentFixture<GlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
