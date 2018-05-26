import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGridComponentComponent } from './dashboard-grid-component.component';

describe('DashboardGridComponentComponent', () => {
  let component: DashboardGridComponentComponent;
  let fixture: ComponentFixture<DashboardGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
