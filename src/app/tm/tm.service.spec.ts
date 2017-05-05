import { TestBed, inject } from '@angular/core/testing';

import { TmService } from './tm.service';

describe('TmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmService]
    });
  });

  it('should ...', inject([TmService], (service: TmService) => {
    expect(service).toBeTruthy();
  }));
});
