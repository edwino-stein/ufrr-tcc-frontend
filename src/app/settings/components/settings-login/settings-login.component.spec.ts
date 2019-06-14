import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLoginComponent } from './settings-login.component';

describe('SettingsLoginComponent', () => {
  let component: SettingsLoginComponent;
  let fixture: ComponentFixture<SettingsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
