import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {PhotoService} from '../services/photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoResolver implements Resolve<boolean> {
  constructor(private photoService: PhotoService) {
  }

  resolve(): any {
    return this.photoService.getPhotos();
  }
}
