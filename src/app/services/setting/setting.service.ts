import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private httpClient: HttpClient) { }

  AddMenu(newFoodData: any) {
    return this.httpClient.post(environment.addMenu , newFoodData);
  }
}
