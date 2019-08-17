import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdUiComponent } from './cmd-ui.component';

describe('CmdUiComponent', () => {
  let component: CmdUiComponent;
  let fixture: ComponentFixture<CmdUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
