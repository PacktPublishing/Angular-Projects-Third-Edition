import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private firestore: Firestore, private storage: Storage) {}

  async takePhoto() {
    const {latitude, longitude} = await this.getLocation();
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    if (cameraPhoto.dataUrl) {
      await this.savePhoto(cameraPhoto.dataUrl, latitude, longitude);
    }
  }

  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  private async savePhoto(dataUrl: string, latitude: number, longitude: number) {
    const name = new Date().getUTCMilliseconds().toString();
    const storageRef = ref(this.storage, name);
    await uploadString(storageRef, dataUrl, 'data_url');
    const photoUrl = await getDownloadURL(storageRef);

    const photoCollection = collection(this.firestore, 'photos');
    await addDoc(photoCollection, {
      url: photoUrl,
      lat: latitude,
      lng: longitude
    })
  }

}
