import { IUserDto } from '../dtos/IUserDto';
import { getUsers } from '../infra/http/axiosRepository';

const getUsersService = (): Promise<IUserDto[]> => {
  return getUsers().catch(err => {
    throw new Error(err);
  });
};

export { getUsersService };
