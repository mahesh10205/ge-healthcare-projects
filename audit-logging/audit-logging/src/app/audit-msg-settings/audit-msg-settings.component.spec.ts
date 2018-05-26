import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditMsgSettingsComponent } from './audit-msg-settings.component';

describe('AuditMsgSettingsComponent', () => {
  let component: AuditMsgSettingsComponent;
  let fixture: ComponentFixture<AuditMsgSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditMsgSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditMsgSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
