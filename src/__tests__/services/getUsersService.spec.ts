import { getUsersService } from 'modules/User/services/getUsersService';

const dataInfo = [{
  id: '0879542a-8d2e-4ad1-a111-e76eb14406b8',
  name: 'Elias Rodrigo Monteiro',
  dateOfBirth: 983934000000,
  cpf: '420.176.325-03',
  cep: 54762315,
  publicPlace: 'Rua Planalto',
  neighborhood: 'Bairro dos Estados',
  number: 308,
  city: 'Camaragibe',
  state: 'PE',
}]

jest.mock('modules/User/infra/http/axiosRepository', () => ({
  getUsers: () => Promise.resolve(dataInfo)
}))

describe('Get Users Service', () => {
  it('should get users', () => {
    getUsersService().then((data) => {
      expect(data).toEqual(dataInfo)
    });
  });
})
