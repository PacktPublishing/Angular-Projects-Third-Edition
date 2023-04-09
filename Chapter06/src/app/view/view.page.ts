import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Viewer } from 'cesium';
import { CesiumService } from '../cesium.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewPage implements OnInit, AfterViewInit {

  @ViewChild('mapContainer') content: ElementRef | undefined;

  constructor(private cesiumService: CesiumService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cesiumService.register(new Viewer(this.content?.nativeElement));
    this.cesiumService.addPhotos();
  }

}
