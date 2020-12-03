import { Component, Input, OnInit } from '@angular/core';
import { latLng, marker, tileLayer} from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import {PhotoItem} from '../../shared/model/PhotoItem';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, minZoom: 2 })
    ],
    zoom: 4,
    center: latLng(46.0, 20.0)
  };

  layers: any = [];
  @Input() photos: PhotoItem[];
  @Input() parentSubject: Subject<any>;

  constructor() { }

  ngOnInit(): void {

    // create map markers for all photos
    this.photos.forEach(photo => {
      const popup = '<div style="width: 180px">' + photo.title +
        '<img style="width: 160px; margin-top: 5px; " src="' + photo.url + '"></div>';
      const photoTitle = photo.id as unknown as string;
      const markerItem = marker([ photo.latitude, photo.longitude ], {title: photoTitle }).bindPopup(popup);
      this.layers.push(markerItem);
    });

    this.parentSubject.subscribe(event => {
      // loop over markers, open the popup of marker id of the event
      this.layers.forEach(mrk => {
        if (mrk.options.title === event) {
          mrk.openPopup();
        }
      });
    });
  }

}
