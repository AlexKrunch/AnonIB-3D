import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerUiComponent } from './player-ui.component';

describe('PlayerUiComponent', () => {
  let component: PlayerUiComponent;
  let fixture: ComponentFixture<PlayerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
