import { IAddressDto } from '../dtos/IAddressDto';

export interface IAddressRepository {
  searchAddress(cep: string): Promise<IAddressDto>;
}
