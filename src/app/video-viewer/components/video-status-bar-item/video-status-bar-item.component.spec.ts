import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStatusBarItemComponent } from './video-status-bar-item.component';

describe('VideoStatusBarItemComponent', () => {
  let component: VideoStatusBarItemComponent;
  let fixture: ComponentFixture<VideoStatusBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoStatusBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStatusBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
