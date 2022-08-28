import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FoodReservationWeek} from '../../shared/models/food-reservation/food-reservation-week';
import {SettingTimeReservation} from "../../shared/models/setting/setting-time-reservation";

@Injectable({
  providedIn: 'root'
})
export class FoodReservationService {

  constructor(
   private http:HttpClient
  ) { }

  getFoodReservation(date: string) : Observable <FoodReservationWeek> {
    return this.http.get <FoodReservationWeek> (`${environment.foodReservationUrl}${date}`);
  }
  getEnabledSetting(): Observable<SettingTimeReservation> {
    return this.http.get<SettingTimeReservation>(environment.getEnabledSetting);
  }
}
