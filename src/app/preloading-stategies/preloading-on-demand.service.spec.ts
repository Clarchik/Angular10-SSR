import { TestBed } from '@angular/core/testing';

import { PreloadingOnDemandService } from './preloading-on-demand.service';

describe('PreloadingOnDemandService', () => {
  let service: PreloadingOnDemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadingOnDemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
