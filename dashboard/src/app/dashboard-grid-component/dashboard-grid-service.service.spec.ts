import { TestBed, inject } from '@angular/core/testing';

import { DashboardGridServiceService } from './dashboard-grid-service.service';

describe('DashboardGridServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardGridServiceService]
    });
  });

  it('should be created', inject([DashboardGridServiceService], (service: DashboardGridServiceService) => {
    expect(service).toBeTruthy();
  }));
});
