import { IUserDto } from '../dtos/IUserDto';
import AxiosRepository from '../infra/http/AxiosRepository';
import { IUserRepository } from '../repositories/IUserRepository';

class GetUsersService {
  constructor(private userRepository: IUserRepository) {}

  execute(): Promise<IUserDto[]> {
    return this.userRepository.getUser().catch(err => {
      throw new Error(err);
    });
  }
}

export default new GetUsersService(new AxiosRepository());
