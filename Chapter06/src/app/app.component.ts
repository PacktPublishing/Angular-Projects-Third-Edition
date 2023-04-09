import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Take a photo',
      url: '/capture',
      icon: 'camera'
    },
    {
      title: 'View gallery',
      url: '/view',
      icon: 'globe'
    }
  ];
  constructor() {}
}
