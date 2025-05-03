import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, 
  ],
})
export class HomeComponent {
  imagePath = 'assets/images/AllUpimage.png';
  imageSize = 100;
}
