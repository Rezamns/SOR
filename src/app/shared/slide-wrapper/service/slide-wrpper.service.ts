import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class SlideWrapperService {
  showSlideWrapperSubject: Subject<ComponentType<any>> = new Subject<ComponentType<any>>();
  dataSlideWrapper: any;
  constructor() { }
}
