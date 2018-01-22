import { TestBed, inject } from '@angular/core/testing';

import { CalculatordataService } from './calculatordata.service';

describe('CalculatordataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatordataService]
    });
  });

  it('should be created', inject([CalculatordataService], (service: CalculatordataService) => {
    expect(service).toBeTruthy();
  }));
});
