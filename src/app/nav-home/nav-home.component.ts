import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './nav-home.component.html',
  styleUrl: './nav-home.component.scss'
})
export class NavHomeComponent {

}
