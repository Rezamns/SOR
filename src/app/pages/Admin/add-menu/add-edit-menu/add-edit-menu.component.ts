import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { SlideWrapperService } from "../../../../shared/slide-wrapper/service/slide-wrpper.service";
import { OpenDialog } from "../../../../shared/openDialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DataTableService } from "../../../../shared/components/data-table/service/data-table.service";
import { AddEditMenuService } from "./service/add-edit-menu.service";
import { Food } from '../../../../shared/models/food';
import { Calander } from '../../../../shared/models/calander';

@Component({
  selector: 'app-add-edit-menu',
  templateUrl: './add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.Scss']
})

export class AddEditMenuComponent implements OnInit {
  addEditForm: FormGroup;
  submitButtonTitle: string;
  subscription: Subscription = new Subscription();
  mode: string;
  id: number;
  food: Food;
  foodId: number;
  date: Calander;
  calenderId: number;

  constructor(
    private formBuilder: FormBuilder,
    private slideWrapper: SlideWrapperService,
    private openDialog: OpenDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataTable: DataTableService,
    private AddEditMenuService: AddEditMenuService
  ) { }


  ngOnInit(): void {
    this.createAddEditForm();
    this.getQueryParamsInfo();
  }

  createAddEditForm() {
    this.addEditForm = this.formBuilder.group({
      CalanderDate: [''],
      FoodName: [[]],
    })
  }

  /**
   *
   */
  passingDataById(getId) {
    this.subscription.add(this.AddEditMenuService.getMenuById(getId).subscribe(
      (foodProperty: any) => {
        this.addEditForm.get('CalanderDate').setValue(foodProperty.CalanderDate);
        this.addEditForm.get('FoodName').setValue(foodProperty.FoodName);
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
          this.submitButtonTitle = 'ویرایش منو'
        } else {
          this.submitButtonTitle = 'افزودن منو'
          this.subscription.add(this.AddEditMenuService.getAllMenus().subscribe(
            (menus: Food) => {
              this.food = menus;
            }
          ));
          this.subscription.add(this.AddEditMenuService.getReservationDates().subscribe(
            (date: Calander) => {
              this.date = date;
            }
          ))
        }
      }
    ));
  }
  submitAddEditForm() {
    if (this.mode === 'edit') {
      const menuValue = { ...this.addEditForm.value, FoodId: this.foodId, Id: this.id, CalanderId: this.calenderId, Meal: 0 };
      this.subscription.add(this.AddEditMenuService.updateMenu(menuValue).subscribe(
        () => {
          this.slideWrapper.showSlideWrapperSubject.next(undefined);
          this.dataTable.isAddOrEditeSubject.next(true);
        }
      ));
    } else if (this.mode === 'add') {
      const menuValue = { ...this.addEditForm.value, FoodId: this.foodId, Id: 0, CalanderId: this.calenderId, Meal: 0 };
      this.subscription.add(this.AddEditMenuService.addMenu(menuValue).subscribe(
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

  onChangheFoodName(foodId) {
    this.foodId = foodId;
  }

  onChangheDate(calenderId) {
    this.calenderId = calenderId;
  };

}
