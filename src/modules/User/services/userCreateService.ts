import { v4 } from 'uuid';

import { IUserCreateComponentDto } from '../dtos/IUserCreateComponentDto';
import { IUserCreateDto } from '../dtos/IUserCreateDto';
import { createUser } from '../infra/http/axiosRepository';

const userCreateService = (data: IUserCreateComponentDto) => {
  const formattedData: IUserCreateDto = {
    ...data,
    id: v4(),
    dateOfBirth: data.dateOfBirth.getTime(),
    cep: Number(data.cep.replace('-', '')),
    number: Number(data.number),
  };

  return createUser(formattedData);
};

export { userCreateService };
