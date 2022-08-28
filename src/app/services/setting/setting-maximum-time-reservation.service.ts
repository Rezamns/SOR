import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {SettingTimeReservation} from "../../shared/models/setting/setting-time-reservation";

@Injectable({
  providedIn: 'root'
})
export class SettingMaximumTimeReservationService {

  constructor(private http: HttpClient) {
  }

  getLastReservationConfig() {
    return this.http.get(environment.getEnabledSetting);
  }
  updateLastReservationConfig(updateValue: any) {
    return this.http.put(environment.updateDeliveryLocation , updateValue);
  }
  postMaximumTimeReservation(time?: SettingTimeReservation) {
    return this.http.post(environment.adminSettingUrl, time);
  }
}
