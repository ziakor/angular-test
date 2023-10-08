import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from 'src/app/models/station.model';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent {
  @Input() station: Station | null = null;

}
