import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { address, date, name, random } from 'faker';

import { User } from 'pages/User';

const mockedHistoryPush = jest.fn();
const mockedSetState = jest.fn();
const mockState: any[] = [];
const mockGetUsersService = jest.fn().mockReturnValue([]);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush })
}));

jest.mock('react', (): any => ({
  ...jest.requireActual('react'),
  useState: (_: any) => [mockState, mockedSetState]
}));

jest.mock('modules/User/services/getUsersService', () => ({
  getUsersService: () => Promise.resolve(mockGetUsersService)
}));

describe('Page User', () => {
  it('should render user', () => {
    const { queryByTestId } = render(<User />);

    expect(queryByTestId('page-user')).toBeTruthy();
  });

  it('should click back button', () => {
    const { getByTestId } = render(<User />);

    const btnBack = getByTestId('page-user-back');

    if (btnBack) {
      fireEvent.click(btnBack);
    }

    expect(mockedHistoryPush).toHaveBeenCalledTimes(1);
  });

  it('should check table', () => {
    const data = {
      name: name.firstName(),
      dateOfBirth: date.soon().getTime(),
      cpf: '951.671.240-18',
      cep: address.zipCode(),
      publicPlace: address.streetName(),
      neighborhood: address.streetName() + ' - neighborhood',
      number: random.number(150),
      city: address.city(),
      state: address.state(),
    }

    mockState.push(data);

    const { getByText } = render(<User />);

    expect(getByText(data.name)).toBeTruthy();
    expect(getByText(data.dateOfBirth)).toBeTruthy();
    expect(getByText(data.cpf)).toBeTruthy();
    expect(getByText(data.cep)).toBeTruthy();
    expect(getByText(data.publicPlace)).toBeTruthy();
    expect(getByText(data.neighborhood)).toBeTruthy();
    expect(getByText(data.number)).toBeTruthy();
    expect(getByText(data.city)).toBeTruthy();
    expect(getByText(data.state)).toBeTruthy();
  });
});
