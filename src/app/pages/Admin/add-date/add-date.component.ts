import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { Subscription } from "rxjs";
import { EmitEditProperty } from "../../../shared/components/data-table/model/emitEdit";
import { SlideWrapperService } from "../../../shared/slide-wrapper/service/slide-wrpper.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AddEditDateComponent } from "./add-edit-date/add-edit-date.component";

@Component({
  selector: 'app-add-date',
  templateUrl: './add-date.component.html',
  styleUrls: ['./add-date.component.scss']
})
export class AddDateComponent implements OnInit {

  headerConfigUrl: string = environment.addDateHeaderUrl;
  baseUrl: string = environment.getCalenderData;
  subscription: Subscription = new Subscription();

  constructor(
    private slideWrapper: SlideWrapperService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.router.navigate([], { queryParams: {} });
  }

  /**
   *
   * @param getIdNumber
   */
  removeItemId(getIdNumber: number) {
    // this.subscription.add(this.food.deleteFoodFromServer(getIdNumber).subscribe());
  }

  /**
   *
   * @param EditSlideProperty
   */
  showEditSlide(EditSlideProperty: EmitEditProperty) {
    if (EditSlideProperty.isShow) {
      this.slideWrapper.showSlideWrapperSubject.next(AddEditDateComponent);
      this.router.navigate([], {
        queryParams: {
          mode: 'edit',
          id: EditSlideProperty.foodId,
        },
        relativeTo: this.activatedRoute
      })
    }
  }

  showAddSlide(isShowAddComponent: boolean) {
    if (isShowAddComponent) {
      this.slideWrapper.showSlideWrapperSubject.next(AddEditDateComponent);
      this.router.navigate([], {
        queryParams: {
          mode: 'add',
        },
        relativeTo: this.activatedRoute
      })
    }
  }
}