import {Component, OnInit} from '@angular/core';
import {PhotoItem} from '../../shared/model/PhotoItem';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photos$: PhotoItem[];
  parentSubject: Subject<any> = new Subject();

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.photos$ = this.router.snapshot.data.photoData;
  }

  receiveMessage($event): void {
    this.notifyChildren($event);
  }

  notifyChildren(photoId): void {
    this.parentSubject.next(photoId);
  }

}
