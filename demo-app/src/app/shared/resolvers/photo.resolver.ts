import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {PhotoService} from '../services/photo.service';
import {Observable} from 'rxjs';
import {PhotoItem} from '../model/PhotoItem';

@Injectable({
  providedIn: 'root'
})
export class PhotoResolver implements Resolve<Observable<PhotoItem[]>> {
  constructor(private photoService: PhotoService) {
  }

  resolve(): any {
    return this.photoService.getPhotos();
  }
}
