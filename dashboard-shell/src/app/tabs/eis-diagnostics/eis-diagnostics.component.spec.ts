import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EisDiagnosticsComponent } from './eis-diagnostics.component';

describe('EisDiagnosticsComponent', () => {
  let component: EisDiagnosticsComponent;
  let fixture: ComponentFixture<EisDiagnosticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisDiagnosticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EisDiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
