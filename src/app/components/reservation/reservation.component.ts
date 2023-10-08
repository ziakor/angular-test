import { NgxMatDatepickerInputEvent } from '@angular-material-components/datetime-picker/lib/datepicker-input-base';
import { Location } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { min } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  vehicle: Vehicle | null = null;
  selectedDateTime: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  minDate = new Date();
  @ViewChild('startPicker', { static: true }) startPicker: any;
  startDateController = new FormControl(null);
  @ViewChild('endPicker', { static: true }) endPicker: any;
  endDateController = new FormControl(null);

  reservationCost: number = 0;
  submitDisabled: boolean = true;
  errorMessage: string | null = null;
  numberOfDays: number = 0;
  ngOnInit() {
    const queryParams = this.route.snapshot.queryParamMap;
    const stationName = queryParams.get('stationName');
    const vehicleId = queryParams.get('vehicleId');
    const vehicleCondition = queryParams.get('vehicleCondition');
    const vehiclePricePerHour = queryParams.get('vehiclePricePerHour');
    const vehicleModel = queryParams.get('vehicleModel');
    const vehiclePhoto = queryParams.get('vehiclePhoto');
    const vehicleFuelType = queryParams.get('vehicleFuelType');
    const vehicleRating = queryParams.get('vehicleRating');
    
    if (!stationName || !vehicleId || !vehicleCondition || !vehiclePricePerHour
        || !vehicleModel || !vehiclePhoto || !vehicleFuelType || !vehicleRating) {
      this.router.navigate(['/']);
      return;
    }
    else {
      this.vehicle = {
        id: parseInt(vehicleId),
        condition: vehicleCondition,
        pricePerHour: parseInt(vehiclePricePerHour),
        model: vehicleModel,
        photo: vehiclePhoto,
        fuelType: vehicleFuelType,
        rating: parseInt(vehicleRating)
      }
    }
  }

  backToPreviousPage() {
    const stationName = this.route.snapshot.queryParamMap.get('stationName');
    this.router.navigate(['/'], { queryParams: { stationName } });
  }

  calculatePrice(startTime: Date, endTime: Date) {
    const pricePerHour = this.vehicle?.pricePerHour;
    const durationInMilliseconds = endTime.getTime() - startTime.getTime();
    const durationInHours = durationInMilliseconds / (1000 * 60 * 60);
    const totalPrice = pricePerHour! * durationInHours;

    this.reservationCost = totalPrice;
  }

  onValidateTime() {
    if (this.startDateController.value && this.endDateController.value) {
      const startTime = new Date(this.startDateController.value);
      const endTime = new Date(this.endDateController.value);
      
      const timeDifference = endTime.getTime() - startTime.getTime();
      const hoursDifference = timeDifference / (1000 * 3600);
      if (hoursDifference < 24) {
        this.errorMessage = "La période de réservation doit durer au moins 24 heures.";
      } else if (endTime < startTime) {
        this.errorMessage = "L'heure de fin doit être postérieure à l'heure de début.";
      } else {
        this.numberOfDays = Math.floor(hoursDifference / 24);
        this.calculatePrice(startTime, endTime);
        this.submitDisabled = false;
        return;
      }
    }
    this.submitDisabled = true;
  }

  handleDateChange(_event: NgxMatDatepickerInputEvent<any, any>) {
    this.onValidateTime();
  }

  handleSubmitReservation() {
    window.alert('Votre réservation a été effectuée avec succès !');
  }

  getMaxReservationData(date: Date | null) {
    if (!date) {
      date = this.minDate;
    }
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
  }

  getMinReservationData(date: Date | null) {
    if (!date) {
      return null;
    }
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    return newDate;
  }
}
