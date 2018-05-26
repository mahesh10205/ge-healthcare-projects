import { TestBed, inject } from '@angular/core/testing';

import { K8sServiceService } from './k8s-service.service';

describe('K8sServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [K8sServiceService]
    });
  });

  it('should be created', inject([K8sServiceService], (service: K8sServiceService) => {
    expect(service).toBeTruthy();
  }));
});
