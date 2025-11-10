import { TestBed } from '@angular/core/testing';

import { ManageComponentService } from './manage-component.service';

describe('ManageComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageComponentService = TestBed.inject(ManageComponentService);
    expect(service).toBeTruthy();
  });
});
