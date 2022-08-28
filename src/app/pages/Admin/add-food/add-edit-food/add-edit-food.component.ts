import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SlideWrapperService } from "../../../../shared/slide-wrapper/service/slide-wrpper.service";
import { Subscription } from "rxjs";
import { OpenDialog } from "../../../../shared/openDialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../../../services/food-actions.service";
import { DataTableService } from "../../../../shared/components/data-table/service/data-table.service";

@Component({
  selector: 'app-add-edit-food',
  templateUrl: './add-edit-food.component.html',
  styleUrls: ['./add-edit-food.component.scss']
})
export class AddEditFoodComponent implements OnInit {
  addEditForm: FormGroup;
  submitButtonTitle: string;
  subscription: Subscription = new Subscription();
  mode: string;
  id: number;
  constructor(
    private formBuilder: FormBuilder,
    private slideWrapper: SlideWrapperService,
    private openDialog: OpenDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private addFood: DataService,
    private dataTable: DataTableService) { }

  ngOnInit(): void {
    this.createAddEditForm();
    this.getQueryParamsInfo();
  }
  createAddEditForm() {
    this.addEditForm = this.formBuilder.group({
      Name: [''],
      Price: [''],
    })
  }

  /**
   *
   */
  passingDataById(getId) {
    this.subscription.add(this.addFood.getFoodById(getId).subscribe(
      (foodProperty) => {
        this.addEditForm.patchValue(foodProperty);
      }
    ));
  }
  getQueryParamsInfo() {
    this.subscription.add(this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.mode = queryParams.mode;
        this.id = queryParams.id;
        if (this.mode === 'edit') {
          this.passingDataById(queryParams.id);
          this.submitButtonTitle = 'ویرایش غذا'
        } else {
          this.submitButtonTitle = 'افزودن غذا'
        }
      }
    ));
  }
  submitAddEditForm() {
    if (this.mode === 'edit') {
      const foodValue = { ...this.addEditForm.value, Id: this.id };
      this.subscription.add(this.addFood.editFoodItem(foodValue).subscribe(
        () => {
          this.slideWrapper.showSlideWrapperSubject.next(undefined);
          this.dataTable.isAddOrEditeSubject.next(true);
        }
      ));
    } else if (this.mode === 'add') {
      const foodValue = { ...this.addEditForm.value, Id: 0 };
      this.subscription.add(this.addFood.addFoodToMenu(foodValue).subscribe(
        () => {
          this.slideWrapper.showSlideWrapperSubject.next(undefined);
          this.dataTable.isAddOrEditeSubject.next(true);
        }
      ));
    }
  }

  onCloseSlide() {
    const title = 'آیا از بستن پنجره اطمینان دارید؟';
    const description = 'بعد از بستن پنجره محتوا ذخیره نخواهد شد';
    this.subscription.add(this.openDialog.openDialog(
      {
        width: '50vw',
        title: title,
        description: description,
        confirmTitle: 'بستن',
        cancelTitle: 'لغو',
        isConfirm: ''
      }
    ).subscribe(
      (isConfirm) => {
        if (isConfirm) {
          this.slideWrapper.showSlideWrapperSubject.next(undefined);
          this.router.navigate([], { queryParams: {} });
        }
      }
    ))
  }
}
