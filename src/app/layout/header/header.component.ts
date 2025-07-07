import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';
import { Observable } from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule
  ]
})
export class HeaderComponent {
  isSidebarExpanded$!: Observable<boolean>;

  constructor(private layoutService: LayoutService) {
    this.isSidebarExpanded$ = this.layoutService.sidebarExpandedSubject.asObservable();
  }
}
