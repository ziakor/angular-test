import { Vehicle } from "./vehicle.model";

export interface Station {
  name: string;
  address: string;
  places: number;
  vehicles: Vehicle[];
}
