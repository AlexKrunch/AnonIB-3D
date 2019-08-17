import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPostUiComponent } from './ad-post-ui.component';

describe('AdPostUiComponent', () => {
  let component: AdPostUiComponent;
  let fixture: ComponentFixture<AdPostUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPostUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPostUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
