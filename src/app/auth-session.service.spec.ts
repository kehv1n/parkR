import { TestBed, inject } from '@angular/core/testing';

import { AuthSessionService } from './auth-session.service';

describe('AuthSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSessionService]
    });
  });

  it('should ...', inject([AuthSessionService], (service: AuthSessionService) => {
    expect(service).toBeTruthy();
  }));
});
