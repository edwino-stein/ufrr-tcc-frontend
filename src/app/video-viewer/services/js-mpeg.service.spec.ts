import { TestBed } from '@angular/core/testing';

import { JsMpegService } from './js-mpeg.service';

describe('JsMpegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsMpegService = TestBed.get(JsMpegService);
    expect(service).toBeTruthy();
  });
});
