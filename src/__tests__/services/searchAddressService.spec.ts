import { searchAddressService } from 'modules/Address/services/searchAddressService';

const dataInfo = {
  cep: '79835-042',
  logradouro: 'Rua Narciso Ramires',
  complemento: '',
  bairro: 'Chácaras Castelo I',
  localidade: 'Dourados',
  uf: 'MS',
}

jest.mock('modules/Address/infra/http/axiosRepository', () => ({
  searchAddress: () => Promise.resolve(dataInfo)
}))

describe('Search Address Service', () => {
  it('should seend data', () => {
    const result = {
      cep: 79835042,
      publicPlace: 'Rua Narciso Ramires',
      neighborhood: 'Chácaras Castelo I',
      city: 'Dourados',
      state: 'MS'
    }

    searchAddressService(dataInfo.cep).then((data) => {
      expect(data).toEqual(result)
    });
  });
})
