import { TestBed } from '@angular/core/testing';

import { FoodDetailsEditorService } from './food-details-editor.service';

describe('FoodDetailsEditorService', () => {
  let service: FoodDetailsEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDetailsEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
