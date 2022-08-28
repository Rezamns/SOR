import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ProfileModel} from "../../shared/models/profile/profile-model";
import { DeliveryLocation } from '../../shared/models/profile/delivery-location';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient) { }
  getProfileData(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(environment.profileUrl);
  }
  getDeliveryLocation(id: number): Observable<DeliveryLocation> {
    return this.http.get<DeliveryLocation>(`${environment.getDeliveryLocation}${id}`);
  }
  updateDeliveryLocation(updateItem: DeliveryLocation) {
    return this.http.put(environment.updateDeliveryLocation,updateItem);
  }

}
