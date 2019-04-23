import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpegPlayerComponent } from './mpeg-player.component';

describe('MpegPlayerComponent', () => {
  let component: MpegPlayerComponent;
  let fixture: ComponentFixture<MpegPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpegPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpegPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
