import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostRegistrationPageComponent } from './host-registration-page.component';

describe('HostRegistrationPageComponent', () => {
  let component: HostRegistrationPageComponent;
  let fixture: ComponentFixture<HostRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
