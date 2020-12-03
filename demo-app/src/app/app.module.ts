import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './main/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './main/map/map.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {PhotoService} from './shared/services/photo.service';
import {HttpClientModule} from '@angular/common/http';
import { PhotoTableComponent } from './main/photo-table/photo-table.component';
import { HomeComponent } from './main/home/home.component';
import {PhotoResolver} from './shared/resolvers/photo.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MapComponent,
    PhotoTableComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [PhotoService, PhotoResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
