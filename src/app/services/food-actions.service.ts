import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ExistenceFoodList} from '../shared/models/food/existence-food-list';
import {environment} from '../../environments/environment';
import {AddFood} from "../shared/models/food/add-food";
import {FoodEditorFormData} from "../shared/models/food-editor-form-data";


@Injectable()
export class DataService {


  dataChange: BehaviorSubject<ExistenceFoodList[]> = new BehaviorSubject<ExistenceFoodList[]>([]);
  deleteFoodItemSubject: Subject<boolean> = new Subject<boolean>()
  dialogData: ExistenceFoodList[];
  foodEditorFormData : Subject <FoodEditorFormData> = new Subject<FoodEditorFormData> ();

  constructor(private http: HttpClient) {
  }

  get data(): ExistenceFoodList[] {
    return this.dataChange.value;
  }

  getExistenceFoodList(): Observable<ExistenceFoodList> {
    return this.http.get <ExistenceFoodList>(environment.foodExistenceListUrl);
  }

  addFoodToMenu(addFood: AddFood) {
    return this.http.post(environment.addFoodUrl, addFood);
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllFoodList(): Observable<ExistenceFoodList[]> {
    return this.http.get<ExistenceFoodList[]>(environment.foodExistenceListUrl);
  }
  deleteFoodFromServer(id: number) {
    return this.http.delete(`${environment.deleteFoodUrl}/${id}`);
  }
  editFoodItem(editedItem: FoodEditorFormData) {
    return this.http.put(environment.editFoodUrl , editedItem);
  }
  getFoodById(id: number) {
    return this.http.get(`${environment.getFoodByIdUrl}/${id}`);
  }
  // addIssue (issue: Issue): void {
  //   this.dialogData = issue;
  // }

  // updateIssue (issue: Issue): void {
  //   this.dialogData = issue;
  // }
}
