import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

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
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('/api/persons')
      .then(response => response.json())
      .then(json => setPersons(json));
  }, []);

  return (
    <Container>
      <header>
        <Link to="/">
          <MdKeyboardArrowLeft size={60} color="#fff" /> <span>Voltar</span>
        </Link>
      </header>

      <Table columns={columns} rows={persons} isBordered isHovered />
    </Container>
  );
};

export { User };
