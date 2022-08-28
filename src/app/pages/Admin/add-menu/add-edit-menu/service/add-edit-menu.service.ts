import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../../environments/environment";
import { Observable } from "rxjs";
import { SettingTimeReservation } from "../../../../../shared/models/setting/setting-time-reservation";

@Injectable({
  providedIn: 'root'
})
export class AddEditMenuService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getMenuById(id: number) {
    return this.httpClient.get(`${environment.getMenuById}/${id}`);
  }
  addMenu(newItem) {
    return this.httpClient.post(environment.addMenu, newItem);
  }
  updateMenu(editMenu) {
    return this.httpClient.put(environment.updateMenu, editMenu)
  }
  getAllMenus() {
    return this.httpClient.get(environment.getFoodByIdUrl);
  }
  getReservationDates() {
    return this.httpClient.get(environment.getCalanders);
  }
}