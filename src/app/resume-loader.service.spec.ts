import { TestBed } from '@angular/core/testing';

import { ResumeLoaderService } from './resume-loader.service';

describe('ResumeLoaderService', () => {
  let service: ResumeLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
