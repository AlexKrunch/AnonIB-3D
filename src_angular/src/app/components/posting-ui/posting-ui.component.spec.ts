import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingUIComponent } from './posting-ui.component';

describe('PostingUIComponent', () => {
  let component: PostingUIComponent;
  let fixture: ComponentFixture<PostingUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
