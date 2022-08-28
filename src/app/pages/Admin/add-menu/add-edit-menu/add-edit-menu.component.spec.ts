import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMenuComponent } from './add-edit-menu.component';

describe('AddEditMenuComponent', () => {
  let component: AddEditMenuComponent;
  let fixture: ComponentFixture<AddEditMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
