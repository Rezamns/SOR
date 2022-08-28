import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogEmitService {
  dialogActionButtonSubject: Subject<boolean> = new Subject<boolean>();
  constructor() { }
}
