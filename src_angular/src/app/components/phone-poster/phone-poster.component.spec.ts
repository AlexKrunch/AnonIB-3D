import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePosterComponent } from './phone-poster.component';

describe('PhonePosterComponent', () => {
  let component: PhonePosterComponent;
  let fixture: ComponentFixture<PhonePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
