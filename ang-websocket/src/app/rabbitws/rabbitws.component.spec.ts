import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitwsComponent } from './rabbitws.component';

describe('RabbitwsComponent', () => {
  let component: RabbitwsComponent;
  let fixture: ComponentFixture<RabbitwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbitwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
