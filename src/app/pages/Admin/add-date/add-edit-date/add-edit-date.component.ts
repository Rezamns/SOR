import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { SlideWrapperService } from "../../../../shared/slide-wrapper/service/slide-wrpper.service";
import { OpenDialog } from "../../../../shared/openDialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DataTableService } from "../../../../shared/components/data-table/service/data-table.service";
import { AddEditDateService } from "../service/add-date.service";
import { Calander } from '../../../../shared/models/calander';

@Component({
  selector: 'app-add-edit-date',
  templateUrl: './add-edit-date.component.html',
  styleUrls: ['./add-edit-date.component.scss']
})
export class AddEditDateComponent implements OnInit {
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
    private dataTable: DataTableService,
    private AddEditDateService: AddEditDateService) { }

  ngOnInit(): void {
    this.createAddEditForm();
    this.getQueryParamsInfo();
  }
  createAddEditForm() {
    this.addEditForm = this.formBuilder.group({
      Date: ['']
    })
  }

  /**
   *
   */
  passingDataById(getId) {
    this.subscription.add(this.AddEditDateService.getCalenderById(getId).subscribe(
      (foodProperty: Calander) => {
        this.addEditForm.get('Date').setValue(foodProperty.Date);
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
          this.submitButtonTitle = 'ویرایش تاریخ'
        } else {
          this.submitButtonTitle = 'افزودن تاریخ'
        }
      }
    ));
  }
  submitAddEditForm() {
    if (this.mode === 'edit') {
      const dateValue = { ...this.addEditForm.value, Id: this.id };
      this.subscription.add(this.AddEditDateService.editCalender(dateValue).subscribe(
        () => {
          this.slideWrapper.showSlideWrapperSubject.next(undefined);
          this.dataTable.isAddOrEditeSubject.next(true);
        }
      ));
    } else if (this.mode === 'add') {
      const dateValue = { ...this.addEditForm.value, Id: 0 };
      this.subscription.add(this.AddEditDateService.addCalender(dateValue).subscribe(
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
