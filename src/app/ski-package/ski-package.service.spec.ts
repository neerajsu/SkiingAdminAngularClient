import { TestBed, inject } from '@angular/core/testing';

import { SkiPackageService } from './ski-package.service';

describe('SkiPackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkiPackageService]
    });
  });

  it('should be created', inject([SkiPackageService], (service: SkiPackageService) => {
    expect(service).toBeTruthy();
  }));
});
