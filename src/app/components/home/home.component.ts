import { Component } from '@angular/core';
import { Station } from 'src/app/models/station.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedStation: Station | null = null;

}
