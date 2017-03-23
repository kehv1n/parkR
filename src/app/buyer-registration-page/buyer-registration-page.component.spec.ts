import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRegistrationPageComponent } from './buyer-registration-page.component';

describe('BuyerRegistrationPageComponent', () => {
  let component: BuyerRegistrationPageComponent;
  let fixture: ComponentFixture<BuyerRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
