import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseRepositiryComponent } from './enterprise-repositiry.component';

describe('EnterpriseRepositiryComponent', () => {
  let component: EnterpriseRepositiryComponent;
  let fixture: ComponentFixture<EnterpriseRepositiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseRepositiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseRepositiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
