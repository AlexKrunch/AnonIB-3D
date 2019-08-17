import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinPostUiComponent } from './pin-post-ui.component';

describe('PinPostUiComponent', () => {
  let component: PinPostUiComponent;
  let fixture: ComponentFixture<PinPostUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinPostUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinPostUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
