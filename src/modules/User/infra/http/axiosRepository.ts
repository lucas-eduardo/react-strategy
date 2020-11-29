import { IUserCreateDto } from 'modules/User/dtos/IUserCreateDto';

import { api } from 'shared/infra/http/httpAxios';

const getUsers = (): Promise<IUserCreateDto[]> => {
  return api
    .get<IUserCreateDto[]>('persons')
    .then(({ data }) => data)
    .catch(err => {
      throw new Error(err);
    });
};

const createUser = (data: IUserCreateDto): Promise<null> => {
  return api
    .post('persons', data)
    .then(() => null)
    .catch(err => {
      throw new Error(err);
    });
};

export { getUsers, createUser };
