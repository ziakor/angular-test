import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent {

  @Input({ required: true }) vehicle!: Vehicle;
  @Input() disabled: boolean = false;
  @Input() stationName: string | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  goToReservation(vehicleSelected: Vehicle) {
    this.router.navigate(['/reservation'], {
      queryParams: {
        stationName: this.stationName,
        vehicleId: vehicleSelected.id,
        vehiclePhoto: vehicleSelected.photo,
        vehicleModel: vehicleSelected.model,
        vehicleCondition: vehicleSelected.condition,
        vehicleRating: vehicleSelected.rating,
        vehicleFuelType: vehicleSelected.fuelType,
        vehiclePricePerHour: vehicleSelected.pricePerHour,
      }
    });
  }
}
