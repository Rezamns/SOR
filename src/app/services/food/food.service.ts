import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExistenceFoodList } from '../../../app/shared/models/food/existence-food-list';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {}
   
  getExistenceFoodList() :Observable<ExistenceFoodList> {
    return this.http.get <ExistenceFoodList> (environment.foodExistenceListUrl)
  }
}
