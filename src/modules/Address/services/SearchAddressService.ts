import { IAddressDto } from '../dtos/IAddressDto';
import AxiosRepository from '../infra/http/AxiosRepository';
import { IAddressRepository } from '../repositories/IAddressRepository';

class SearchAddressService {
  constructor(private readonly addressRepository: IAddressRepository) {}

  execute(cep: string): Promise<IAddressDto> {
    const address = this.addressRepository
      .searchAddress(cep)
      .then(data => data)
      .catch(err => {
        throw new Error(err);
      });

    return address;
  }
}

export default new SearchAddressService(new AxiosRepository());
