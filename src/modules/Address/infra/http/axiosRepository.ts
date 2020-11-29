import { IViaCepDto } from 'modules/Address/dtos/IViaCepDto';

import { axios } from 'shared/infra/http/httpAxios';

const searchAddress = (cep: string): Promise<IViaCepDto> => {
  const url = process.env.REACT_APP_SEARCH_ADDRESS?.replace(
    '{CEP}',
    cep,
  ) as string;

  const address = axios
    .get<IViaCepDto>(url)
    .then(({ data }) => data)
    .catch(err => {
      throw new Error(err);
    });

  return address;
};

export { searchAddress };
