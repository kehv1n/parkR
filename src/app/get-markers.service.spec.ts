import { TestBed, inject } from '@angular/core/testing';

import { GetMarkersService } from './get-markers.service';

describe('GetMarkersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMarkersService]
    });
  });

  it('should ...', inject([GetMarkersService], (service: GetMarkersService) => {
    expect(service).toBeTruthy();
  }));
});
