import { v4 } from 'uuid';

import { IUserCreateComponentDto } from '../dtos/IUserCreateComponentDto';
import { IUserCreateDto } from '../dtos/IUserCreateDto';
import AxiosRepository from '../infra/http/AxiosRepository';
import { IUserRepository } from '../repositories/IUserRepository';

class UserCreateService {
  constructor(private userRepository: IUserRepository) {}

  execute(data: IUserCreateComponentDto) {
    const createUser: IUserCreateDto = {
      ...data,
      id: v4(),
      dateOfBirth: data.dateOfBirth.getTime(),
      cep: Number(data.cep.replace('-', '')),
      number: Number(data.number),
    };

    return this.userRepository.createUser(createUser);
  }
}

export default new UserCreateService(new AxiosRepository());
