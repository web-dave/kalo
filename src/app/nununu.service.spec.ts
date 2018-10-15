import { TestBed, inject } from '@angular/core/testing';

import { NununuService } from './nununu.service';

describe('NununuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NununuService]
    });
  });

  it('should be created', inject([NununuService], (service: NununuService) => {
    expect(service).toBeTruthy();
  }));
});
