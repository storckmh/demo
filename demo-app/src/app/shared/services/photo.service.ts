import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PhotoItem} from '../model/PhotoItem';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<PhotoItem[]> {
    const url = environment.apiUrl + 'photos';

    return new Observable((observer) => {
      return this.http.get<PhotoItem[]>(url).subscribe(items => {
        observer.next(items);
        observer.complete();
      });
    });
  }

}
