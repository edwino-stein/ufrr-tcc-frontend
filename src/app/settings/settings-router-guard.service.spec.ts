import { TestBed } from '@angular/core/testing';

import { SettingsRouterGuardService } from './settings-router-guard.service';

describe('SettingsRouterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsRouterGuardService = TestBed.get(SettingsRouterGuardService);
    expect(service).toBeTruthy();
  });
});
