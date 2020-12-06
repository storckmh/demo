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

  /**
   * Function that is called when a message is recieved from a child component
   * @param $event event passed from message
   */
  receiveMessage($event): void {
    this.notifyChildren($event);
  }

  /**
   * Notify child component of event on a photo id.
   * @param photoId id of photo
   */
  notifyChildren(photoId): void {
    this.parentSubject.next(photoId);
  }

}
