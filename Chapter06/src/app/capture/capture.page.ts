import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CapturePage implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  openCamera() {
    this.photoService.takePhoto();
  }

}
