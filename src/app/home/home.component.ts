import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHomeComponent } from '../nav-home/nav-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
