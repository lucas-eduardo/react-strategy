import { useState, useCallback, useEffect, FormEvent } from 'react';
import { MdClose } from 'react-icons/md';

import searchAddressService from 'modules/Address/services/SearchAddressService';

import { Input } from 'components/Input';

import { IModalAddPersonProps } from './IModalAddPerson';

import { Container, Header, Main, WrapperInput } from './styles';

const ModalAddPerson = ({ instanceModal }: IModalAddPersonProps) => {
  const { handleModal, setIsCenterContent } = instanceModal();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [publicPlace, setPublicPlace] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      console.log(
        cep,
        city,
        cpf,
        dateOfBirth,
        handleModal,
        lastName,
        name,
        neighborhood,
        number,
        publicPlace,
        state,
      );

      handleModal();
    },
    [
      cep,
      city,
      cpf,
      dateOfBirth,
      handleModal,
      lastName,
      name,
      neighborhood,
      number,
      publicPlace,
      state,
      handleModal,
    ],
  );

  const getAddress = useCallback((cep: string) => {
    searchAddressService
      .execute(cep)
      .then(({ publicPlace, neighborhood, city, state }) => {
        setPublicPlace(publicPlace);
        setNeighborhood(neighborhood);
        setCity(city);
        setState(state);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (cep.length === 8 || cep.length === 9) {
      getAddress(cep);
    }
  }, [cep, getAddress]);

  useEffect(() => {
    setIsCenterContent(true);
  }, [setIsCenterContent]);

  return (
    <Container>
      <Header>
        <h2>Cadastro</h2>

        <button type="button" onClick={handleModal}>
          <MdClose size={36} />
        </button>
      </Header>

      <Main>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <section className="row">
            <legend>Dados pessoais</legend>

            <div className="content-input">
              <WrapperInput>
                <Input
                  type="text"
                  placeholder="Nome"
                  defaultValue={name}
                  onChange={e => setName(e.target.value)}
                />
              </WrapperInput>

              <WrapperInput>
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  defaultValue={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </WrapperInput>

              <WrapperInput>
                <Input
                  type="date"
                  placeholder="Data de nascimento"
                  defaultValue={dateOfBirth}
                  onChange={e => setDateOfBirth(e.target.value)}
                />
              </WrapperInput>

              <WrapperInput>
                <Input
                  type="text"
                  placeholder="CPF"
                  defaultValue={cpf}
                  onChange={e => setCpf(e.target.value)}
                />
              </WrapperInput>
            </div>
          </section>

          <section className="row">
            <legend>Endereço</legend>

            <div className="content-input">
              <WrapperInput maxWidth={200}>
                <Input
                  type="text"
                  placeholder="CEP"
                  defaultValue={cep}
                  onChange={e => setCep(e.target.value)}
                />
              </WrapperInput>

              <WrapperInput>
                <Input
                  type="text"
                  placeholder="Logradouro"
                  disabled
                  defaultValue={publicPlace}
                />
              </WrapperInput>

              <WrapperInput>
                <Input
                  type="text"
                  placeholder="Bairro"
                  disabled
                  defaultValue={neighborhood}
                />
              </WrapperInput>

              <WrapperInput maxWidth={150}>
                <Input
                  type="number"
                  placeholder="Numero"
                  defaultValue={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </WrapperInput>

              <WrapperInput>
                <Input
                  type="text"
                  placeholder="Cidade"
                  disabled
                  defaultValue={city}
                />
              </WrapperInput>

              <WrapperInput>
                <Input
                  type="text"
                  placeholder="Estado"
                  disabled
                  defaultValue={state}
                />
              </WrapperInput>
            </div>
          </section>

          <section className="row">
            <button type="submit">Salvar</button>
          </section>
        </form>
      </Main>
    </Container>
  );
};

export { ModalAddPerson };
