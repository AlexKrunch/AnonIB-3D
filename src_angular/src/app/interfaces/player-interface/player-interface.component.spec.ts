import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInterfaceComponent } from './player-interface.component';

describe('PlayerInterfaceComponent', () => {
  let component: PlayerInterfaceComponent;
  let fixture: ComponentFixture<PlayerInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
