import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from 'src/app/models/station.model';
import { StationService, getStationsResponse } from 'src/app/services/station/station.service';



@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {
  stations: Station[] = [];
  loading: boolean = true;
  error: string | null = null;
  @Output() selectedStation = new EventEmitter<Station>();
  @Input() selectedStationName: string | null | undefined = null;
  constructor(private stationService: StationService, private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const stationName = this.route.snapshot.queryParamMap.get('stationName');
    this.loading = true;
    this.stationService.getStations().subscribe({
      next: (res: getStationsResponse) => {
        const stations: Station[] = res.results.map((station) => {
          return {
            places: station.plarel,
            address: `${station.numvoie ?? ""} ${station.typevoie} ${station.nomvoie}`,
            name: station.zoneres,
            vehicles: this.stationService.getVehicles(station.plarel)
          };
        });
        this.stations = stations;
        console.log(stationName)
        if (stationName) {
          const station = this.stations.find((station) => station.name === stationName);
          if (station)
            this.selectedStation.emit(station);
        }
        this.loading = false;
      },
      error: (error: any) => {
        console.log(error)
        this.error = "Une erreur est survenue lors de la récupération des données";
        this.loading = false;
      }
    });
  }



  selectStation(station: Station) {
    this.selectedStation.emit(station);
    if (station) {
      const newUrl = this.location.path().split('?')[0] + `?stationName=${station.name}`;
      this.location.replaceState(newUrl);
    }
  }
}
