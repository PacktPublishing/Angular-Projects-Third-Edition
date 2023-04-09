import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Cartesian3, Color, PinBuilder, Viewer } from 'cesium';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CesiumService {
  private viewer: Viewer | undefined;

  constructor(private firestore: Firestore) { }

  register(viewer: Viewer) {
    this.viewer = viewer;
  }

  async addPhotos() {
    const pinBuilder = new PinBuilder();
    const photos = await this.getPhotos();
    photos.forEach(photo => {
      const entity = {
        position: Cartesian3.fromDegrees(photo.get('lng'), photo.get('lat')),
        billboard: {
          image: pinBuilder.fromColor(Color.fromCssColorString('#de6b45'), 48).toDataURL()
        },
        description: `<img width="100%" style="margin:auto; display: block;" src="${photo.get('url')}" />`
      };
      this.viewer?.entities.add(entity);
    });
  }

  private async getPhotos() {
    const photoCollection = collection(this.firestore, 'photos');
    return await getDocs(photoCollection);
  }

}
