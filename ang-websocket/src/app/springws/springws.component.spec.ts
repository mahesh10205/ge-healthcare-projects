import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringwsComponent } from './springws.component';

describe('SpringwsComponent', () => {
  let component: SpringwsComponent;
  let fixture: ComponentFixture<SpringwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
