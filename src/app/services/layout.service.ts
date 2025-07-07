import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidebarExpandedSubject = new BehaviorSubject<boolean>(false);
}
