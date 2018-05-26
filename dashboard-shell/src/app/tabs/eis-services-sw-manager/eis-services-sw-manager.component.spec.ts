import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EisServicesSwManagerComponent } from './eis-services-sw-manager.component';

describe('EisServicesSwManagerComponent', () => {
  let component: EisServicesSwManagerComponent;
  let fixture: ComponentFixture<EisServicesSwManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisServicesSwManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EisServicesSwManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
