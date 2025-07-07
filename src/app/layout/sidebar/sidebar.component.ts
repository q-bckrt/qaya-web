import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutService} from '../../services/layout.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {

  isSidebarExpanded$! : Observable<boolean>;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.isSidebarExpanded$ = this.layoutService.sidebarExpandedSubject.asObservable();
  }

  onMouseEnter() {
    this.layoutService.sidebarExpandedSubject.next(true);
  }

  onMouseLeave() {
    this.layoutService.sidebarExpandedSubject.next(false);
  }
}
