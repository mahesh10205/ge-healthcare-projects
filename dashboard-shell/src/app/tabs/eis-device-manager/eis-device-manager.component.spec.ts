import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EisDeviceManagerComponent } from './eis-device-manager.component';

describe('EisDeviceManagerComponent', () => {
  let component: EisDeviceManagerComponent;
  let fixture: ComponentFixture<EisDeviceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisDeviceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EisDeviceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
