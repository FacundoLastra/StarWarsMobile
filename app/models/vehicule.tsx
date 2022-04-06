export interface IBaseVehicule {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IVehicule extends IBaseVehicule {
  vehicle_class: string;
}
