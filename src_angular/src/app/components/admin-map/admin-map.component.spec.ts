import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMapComponent } from './admin-map.component';

describe('AdminMapComponent', () => {
  let component: AdminMapComponent;
  let fixture: ComponentFixture<AdminMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
