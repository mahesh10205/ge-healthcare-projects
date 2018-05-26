import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteUiFrontEndComponent } from './remote-ui-front-end.component';

describe('RemoteUiFrontEndComponent', () => {
  let component: RemoteUiFrontEndComponent;
  let fixture: ComponentFixture<RemoteUiFrontEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteUiFrontEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteUiFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
