import { TestBed } from '@angular/core/testing';

import { UiViewerHelperServiceService } from './ui-viewer-helper-service.service';

describe('UiViewerHelperServiceService', () => {
  let service: UiViewerHelperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiViewerHelperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
