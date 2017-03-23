import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePartPageComponent } from './three-part-page.component';

describe('ThreePartPageComponent', () => {
  let component: ThreePartPageComponent;
  let fixture: ComponentFixture<ThreePartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreePartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
