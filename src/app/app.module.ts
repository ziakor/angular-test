import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/router/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StationsListComponent } from './components/stations-list/stations-list.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherArrowLeft } from '@ng-icons/feather-icons';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StationsListComponent,
    StationDetailComponent,
    ReservationComponent,
    VehicleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ featherArrowLeft }),
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
