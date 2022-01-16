import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  toggleSidebar = new Subject<any>();
  public showLoadingScreen: boolean = false;

  constructor() { }
}
