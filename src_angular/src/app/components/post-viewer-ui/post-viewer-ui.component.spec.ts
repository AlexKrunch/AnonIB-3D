import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewerUiComponent } from './post-viewer-ui.component';

describe('PostViewerUiComponent', () => {
  let component: PostViewerUiComponent;
  let fixture: ComponentFixture<PostViewerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
