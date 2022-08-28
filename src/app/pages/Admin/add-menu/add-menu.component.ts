import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { EmitEditProperty } from "../../../shared/components/data-table/model/emitEdit";
import { SlideWrapperService } from "../../../shared/slide-wrapper/service/slide-wrpper.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AddEditMenuComponent } from "./add-edit-menu/add-edit-menu.component";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})

export class AddMenuComponent implements OnInit {
  baseUrl = environment.getMenu;
  headerConfigUrl = environment.headerMenuUrl;
  constructor(
    private slideWrapper: SlideWrapperService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
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
      this.slideWrapper.showSlideWrapperSubject.next(AddEditMenuComponent);
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
      this.slideWrapper.showSlideWrapperSubject.next(AddEditMenuComponent);
      this.router.navigate([], {
        queryParams: {
          mode: 'add',
        },
        relativeTo: this.activatedRoute
      })
    }
  }
}

