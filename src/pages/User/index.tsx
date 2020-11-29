import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { IUserDto } from 'modules/User/dtos/IUserDto';
import { getUsersService } from 'modules/User/services/getUsersService';

import { Table } from '../../components/Table';

import { Container } from './styles';

const columns = [
  { label: 'Nome', row: 'name' },
  { label: 'Data de nascimento', row: 'dateOfBirth' },
  { label: 'CPF', row: 'cpf' },
  { label: 'CEP', row: 'cep' },
  { label: 'Logradouro', row: 'publicPlace' },
  { label: 'Bairro', row: 'neighborhood' },
  { label: 'Numero', row: 'number' },
  { label: 'Cidade', row: 'city' },
  { label: 'Estado', row: 'state' },
];

const User = () => {
  const { push } = useHistory();
  const [persons, setPersons] = useState<IUserDto[]>([]);

  const handleNavigateTo = useCallback(
    (route: string) => {
      push(route);
    },
    [push],
  );

  useEffect(() => {
    getUsersService().then(data => {
      setPersons(data);
    });
  }, []);

  return (
    <Container data-testid="page-user">
      <header>
        <button
          type="button"
          onClick={() => handleNavigateTo('/')}
          data-testid="page-user-back"
        >
          <MdKeyboardArrowLeft size={60} color="#fff" /> <span>Voltar</span>
        </button>
      </header>

      <Table
        data-testid="page-user-table"
        columns={columns}
        rows={persons}
        isBordered
        isHovered
      />
    </Container>
  );
};

export { User };
