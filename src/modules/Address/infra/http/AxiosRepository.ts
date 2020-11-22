import { IAddressDto } from 'modules/Address/dtos/IAddressDto';
import { IViaCepDto } from 'modules/Address/dtos/IViaCepDto';
import { IAddressRepository } from 'modules/Address/repositories/IAddressRepository';

import { axios } from 'shared/infra/http/HttpAxios';

class AxiosRepository implements IAddressRepository {
  searchAddress(cep: string): Promise<IAddressDto> {
    const url = process.env.REACT_APP_SEARCH_ADDRESS?.replace(
      '{CEP}',
      cep,
    ) as string;

    const address: Promise<IAddressDto> = axios
      .get<IViaCepDto>(url)
      .then(({ data }) => ({
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
  }
}

export default AxiosRepository;
