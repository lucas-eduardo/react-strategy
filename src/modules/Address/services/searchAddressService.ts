import { IAddressDto } from '../dtos/IAddressDto';
import { searchAddress } from '../infra/http/axiosRepository';

const searchAddressService = (cep: string): Promise<IAddressDto> => {
  const address: Promise<IAddressDto> = searchAddress(cep)
    .then(data => ({
      cep: Number(data.cep.replace('-', '')),
      publicPlace: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    }))
    .catch(err => {
      throw new Error(err);
    });

  return address;
};

export { searchAddressService };
