import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EisConfigManagerComponent } from './eis-config-manager.component';

describe('EisConfigManagerComponent', () => {
  let component: EisConfigManagerComponent;
  let fixture: ComponentFixture<EisConfigManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisConfigManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EisConfigManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
