import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle.model';

export interface getStationsResponse {
  total_count: number;
  results: {
    plarel: number;
    numvoie: number;
    typevoie: string;
    nomvoie: string;
    zoneres: string;
  }[]
}

@Injectable({
  providedIn: 'root',
})
export class StationService {
  constructor(private http: HttpClient) { }
  private apiUrl =
    'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/stationnement-sur-voie-publique-emprises/records?select=plarel%2C%20numvoie%2C%20typevoie%2C%20nomvoie%2C%20zoneres&limit=8&refine=regpri%3A%22GRATUIT%22&refine=regpri%3A%22LOCATION%22&refine=regpar%3A%22V%C3%A9hicule%20partag%C3%A9%22&refine=regpar%3A%22V%C3%A9hicules%20%C3%A9lectriques%20partag%C3%A9s%22';

  getStations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getVehicles(places: number): Vehicle[] {
    const data = [
      {
        "id": 1,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tesla_Model_3_dual_motor_-_2021-07-01.jpg/1920px-Tesla_Model_3_dual_motor_-_2021-07-01.jpg",
        "model": "Tesla Model 3",
        "condition": "Neuve",
        "rating": 4.5,
        "fuelType": "Electrique",
        "pricePerHour": 15
      },
      {
        "id": 2,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/0_Hyundai_Ioniq_6_3.jpg/1920px-0_Hyundai_Ioniq_6_3.jpg",
        "model": "Hyundai Ioniq 6",
        "condition": "Neuve",
        "rating": 4.0,
        "fuelType": "Electrique",
        "pricePerHour": 11
      },
      {
        "id": 3,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kia_EV6_Auto_Zuerich_2021_IMG_0435.jpg/1920px-Kia_EV6_Auto_Zuerich_2021_IMG_0435.jpg",
        "model": "Kia EV6",
        "condition": "Neuve",
        "rating": 3.5,
        "fuelType": "Electrique",
        "pricePerHour": 10
      },
      {
        "id": 4,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Polestar_2_Genf_2019_1Y7A6000.jpg/1280px-Polestar_2_Genf_2019_1Y7A6000.jpg",
        "model": "Polestar 2",
        "condition": "Neuve",
        "rating": 3.0,
        "fuelType": "Electrique",
        "pricePerHour": 9
      },
      {
        "id": 5,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BMW_i4_IMG_6695.jpg/1920px-BMW_i4_IMG_6695.jpg",
        "model": "BMW i4",
        "condition": "Neuve",
        "rating": 2.5,
        "fuelType": "Electrique",
        "pricePerHour": 8
      },
      {
        "id": 6,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ford_Mustang_Mach-E_AWD_First_Edition_%E2%80%93_f_15072021.jpg/1920px-Ford_Mustang_Mach-E_AWD_First_Edition_%E2%80%93_f_15072021.jpg",
        "model": "Ford Mustang Mach-E",
        "condition": "Occasion",
        "rating": 2.0,
        "fuelType": "Electrique",
        "pricePerHour": 7
      },
      {
        "id": 7,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/VW_ID.4_1st_%E2%80%93_f_26122020.jpg/1920px-VW_ID.4_1st_%E2%80%93_f_26122020.jpg",
        "model": "Volkswagen ID.4",
        "condition": "Occasion",
        "rating": 1.5,
        "fuelType": "Electrique",
        "pricePerHour": 6
      },
      {
        "id": 8,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2018_Nissan_Leaf_Tekna_Front.jpg/1920px-2018_Nissan_Leaf_Tekna_Front.jpg",
        "model": "Nissan Leaf",
        "condition": "Occasion",
        "rating": 1.0,
        "fuelType": "Electrique",
        "pricePerHour": 5
      }
    ];
    const vehicles = data.slice(0, places);
    return vehicles
  }
  
}
