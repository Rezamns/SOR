import { TestBed } from '@angular/core/testing';

import { AddEditMenuService } from './add-edit-menu.service';

describe('AddEditMenuService', () => {
  let service: AddEditMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEditMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
