import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileEditComponent } from './tile-edit.component';

describe('TileEditComponent', () => {
  let component: TileEditComponent;
  let fixture: ComponentFixture<TileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
