import { IUserCreateDto } from '../dtos/IUserCreateDto';

export interface IUserRepository {
  createUser(data: IUserCreateDto): Promise<void>;
  getUser(): Promise<IUserCreateDto[]>;
}
