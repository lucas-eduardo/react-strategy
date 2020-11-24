/* eslint-disable @typescript-eslint/no-empty-function */
import { IUserCreateDto } from 'modules/User/dtos/IUserCreateDto';
import { IUserRepository } from 'modules/User/repositories/IUserRepository';

import { api } from 'shared/infra/http/HttpAxios';

class AxiosRepository implements IUserRepository {
  createUser(data: IUserCreateDto): Promise<void> {
    return api
      .post('persons', data)
      .then(() => {})
      .catch(err => {
        throw new Error(err);
      });
  }
}

export default AxiosRepository;
