import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDateComponent } from './add-edit-date.component';

describe('AddEditDateComponent', () => {
  let component: AddEditDateComponent;
  let fixture: ComponentFixture<AddEditDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
