import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllspotsComponent } from './allspots.component';

describe('AllspotsComponent', () => {
  let component: AllspotsComponent;
  let fixture: ComponentFixture<AllspotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllspotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllspotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
