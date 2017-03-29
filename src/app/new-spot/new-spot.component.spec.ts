import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpotComponent } from './new-spot.component';

describe('NewSpotComponent', () => {
  let component: NewSpotComponent;
  let fixture: ComponentFixture<NewSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
