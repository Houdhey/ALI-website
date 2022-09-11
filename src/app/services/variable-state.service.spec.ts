import { TestBed } from '@angular/core/testing';

import { VariableStateService } from './variable-state.service';

describe('VariableStateService', () => {
  let service: VariableStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariableStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
