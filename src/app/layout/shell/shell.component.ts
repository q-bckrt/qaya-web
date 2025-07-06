import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

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
export class ShellComponent {

}
