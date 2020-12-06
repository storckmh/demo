import {AfterViewInit, Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {PhotoItem} from '../../shared/model/PhotoItem';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-table',
  templateUrl: './photo-table.component.html',
  styleUrls: ['./photo-table.component.scss']
})
export class PhotoTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PhotoItem>;
  dataSource: MatTableDataSource<PhotoItem>;

  @Input() photos: PhotoItem[];
  @Output() photoIdClickEmitter = new EventEmitter<string>();

  constructor() {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['icon', 'id', 'title', 'latitude', 'longitude'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PhotoItem>(this.photos);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  /**
   * @param id id of photo that was clicked on
   */
  clickPhotoId(id): void {
    this.photoIdClickEmitter.emit(id);
  }
}
