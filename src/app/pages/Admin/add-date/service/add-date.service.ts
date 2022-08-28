import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddEditDateService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addCalender(addDate) {
    return this.httpClient.post(environment.addCalender, addDate);
  }
  editCalender(editDate) {
    return this.httpClient.put(environment.editCalender, editDate);
  }
  getCalenderById(calenderId: number) {
    return this.httpClient.get(`${environment.getCalenderByID}/${calenderId}`);
  }
}
