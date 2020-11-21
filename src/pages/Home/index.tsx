import { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { MdPersonAdd, MdFormatListBulleted } from 'react-icons/md';

import { useModal } from 'contextApi/Modal';

import { ModalAddPerson } from './ModalAddPerson';

import { ButtonAction } from 'components/ButtonAction';

import { Container } from './styles';

const Home = () => {
  const { push } = useHistory();
  const { handleModal, modalContent } = useModal();

  const addUserModal = useMemo(
    () => <ModalAddPerson instanceModal={useModal} />,
    [],
  );

  const handleNavigateTo = useCallback(
    (route: string) => {
      push(route);
    },
    [push],
  );

  return (
    <Container>
      <ButtonAction
        Icon={() => <MdPersonAdd />}
        text="Add Person"
        callback={() => {
          modalContent(addUserModal);
          handleModal();
        }}
      />

      <ButtonAction
        Icon={() => <MdFormatListBulleted />}
        text="List Persons"
        callback={() => handleNavigateTo('/user')}
      />
    </Container>
  );
};

export { Home };
