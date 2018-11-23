import { TestBed, inject } from '@angular/core/testing';

import { AuthorCallbackService } from './author-callback.service';

describe('AuthorCallbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorCallbackService]
    });
  });

  it('should be created', inject([AuthorCallbackService], (service: AuthorCallbackService) => {
    expect(service).toBeTruthy();
  }));
});
