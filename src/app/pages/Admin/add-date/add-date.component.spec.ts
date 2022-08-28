import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDateComponent } from './add-date.component';

describe('AddDateComponent', () => {
  let component: AddDateComponent;
  let fixture: ComponentFixture<AddDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
