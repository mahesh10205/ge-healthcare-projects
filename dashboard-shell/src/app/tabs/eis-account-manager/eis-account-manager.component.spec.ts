import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EisAccountManagerComponent } from './eis-account-manager.component';

describe('EisAccountManagerComponent', () => {
  let component: EisAccountManagerComponent;
  let fixture: ComponentFixture<EisAccountManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisAccountManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EisAccountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
