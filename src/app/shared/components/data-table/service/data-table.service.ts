import {Injectable} from '@angular/core';
import {SortDirection} from "@angular/material/sort";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HeaderConfigContainer} from "../model/header-config-container";

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  isAddOrEditeSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private httpClient:HttpClient) { }
  getDataTableItems(page: number, pageSize: number, baseUrl: string): Observable<any> {
    // const requestUrl = `${baseUrl}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}&pageSize=${pageSize}`;
    const requestUrl = `${baseUrl}/${page+1}/${pageSize}`;
    return this.httpClient.get<any>(requestUrl);
  }
  getHeaderConfig(url: string): Observable<HeaderConfigContainer> {
    return this.httpClient.get<HeaderConfigContainer>(url);
  }
}
