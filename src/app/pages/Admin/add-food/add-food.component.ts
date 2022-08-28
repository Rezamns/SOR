import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ExistenceFoodList } from '../../../shared/models/food/existence-food-list';
import { DataService } from '../../../services/food-actions.service';
import { FoodDetailsEditorService } from '../../../services/food/food-details-editor.service';
import { FoodEditorFormData } from '../../../shared/models/food-editor-form-data';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { environment } from "../../../../environments/environment";
import { DialogEmitService } from "../../../shared/components/dialog/service/dialog-emit.service";
import { SlideWrapperService } from "../../../shared/slide-wrapper/service/slide-wrpper.service";
import { AddEditFoodComponent } from "./add-edit-food/add-edit-food.component";
import { EmitEditProperty } from "../../../shared/components/data-table/model/emitEdit";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})

export class AddFoodComponent implements OnInit, OnDestroy {
  index: number;
  id: number;
  existenceFoodList: ExistenceFoodList[] = [];
  dataService: any;
  subscription: Subscription = new Subscription();
  editingData: FoodEditorFormData;
  addFoodForm: FormGroup;
  isLoading = true;
  @ViewChild('showEditDialog') showEditDialog: TemplateRef<any>;
  foodEditorItemForm = this.formBuilder.group({
    Name: ['', Validators.required],
    Price: ['', Validators.required]
  })
  href = environment.addFood;

  constructor(
    private food: DataService,
    public dialog: MatDialog,
    private foodEditor: FoodDetailsEditorService,
    private formBuilder: FormBuilder,
    private dialogEmit: DialogEmitService,
    private slideWrapper: SlideWrapperService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  headerConfigUrl = environment.foodHeaderUrl;

  ngOnInit(): void {
    this.createAddFoodForm();
    this.router.navigate([], { queryParams: {} });
  }

  /**
   * Create Form
   */

  createAddFoodForm() {
    this.addFoodForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.pattern('')]],
      Price: ['', [Validators.required]]
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   *
   * @param getIdNumber
   */
  removeItemId(getIdNumber: number) {
    this.subscription.add(this.food.deleteFoodFromServer(getIdNumber).subscribe());
  }

  /**
   *
   * @param EditSlideProperty
   */
  showEditSlide(EditSlideProperty: EmitEditProperty) {
    if (EditSlideProperty.isShow) {
      this.slideWrapper.showSlideWrapperSubject.next(AddEditFoodComponent);
      this.router.navigate([], {
        queryParams: {
          mode: 'edit',
          id: EditSlideProperty.foodId,
        },
        relativeTo: this.activatedRoute
      })
    }
  }

  /**
   *
   * @param isShowAddComponent
   */
  showAddSlide(isShowAddComponent: boolean) {
    if (isShowAddComponent) {
      this.slideWrapper.showSlideWrapperSubject.next(AddEditFoodComponent);
      this.router.navigate([], {
        queryParams: {
          mode: 'add',
        },
        relativeTo: this.activatedRoute
      })
    }
  }
}