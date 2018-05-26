import { TestBed, inject } from '@angular/core/testing';

import { AuditMsgService } from './audit-msg.service';

describe('AuditMsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditMsgService]
    });
  });

  it('should be created', inject([AuditMsgService], (service: AuditMsgService) => {
    expect(service).toBeTruthy();
  }));
});
