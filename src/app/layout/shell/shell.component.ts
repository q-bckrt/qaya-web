import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {LayoutService} from '../../services/layout.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shell',
  imports: [
    SidebarComponent,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent implements OnInit {

  isSidebarExpanded$!: Observable<boolean>;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.isSidebarExpanded$ = this.layoutService.sidebarExpandedSubject.asObservable();
  }
}
