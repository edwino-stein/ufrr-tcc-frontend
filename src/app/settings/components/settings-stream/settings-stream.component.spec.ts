import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsStreamComponent } from './settings-stream.component';

describe('SettingsStreamComponent', () => {
  let component: SettingsStreamComponent;
  let fixture: ComponentFixture<SettingsStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
