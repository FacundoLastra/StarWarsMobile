import {IBaseVehicule} from './vehicule';

export interface IStarship extends IBaseVehicule {
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
}
