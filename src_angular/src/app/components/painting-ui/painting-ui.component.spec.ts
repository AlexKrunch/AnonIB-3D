import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingUiComponent } from './painting-ui.component';

describe('PaintingUiComponent', () => {
  let component: PaintingUiComponent;
  let fixture: ComponentFixture<PaintingUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
