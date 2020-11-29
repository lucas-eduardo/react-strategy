import { render, fireEvent } from '@testing-library/react';

import { Home } from 'pages/Home';

const mockedHistoryPush = jest.fn();
const mockModalContent = jest.fn();
const mockHandleModal = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush })
}));

jest.mock('contextApi/Modal', () => ({
  useModal: () => ({
    modalContent: mockModalContent,
    handleModal: mockHandleModal
  })
}));

describe('Page Home', () => {
  it('should render home', () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId('page-home')).toBeTruthy();
  });

  it('should click button add person', async () => {
    const { getByTestId } = render(<Home />);

    const btnAddPerson = getByTestId('page-home-add-person');

    if (btnAddPerson) {
      fireEvent.click(btnAddPerson);
    }

    expect(mockModalContent).toHaveBeenCalledTimes(1);
    expect(mockHandleModal).toHaveBeenCalledTimes(1);
  });

  it('should click button list persons', () => {
    const { getByTestId } = render(<Home />);

    const btnAddPerson = getByTestId('page-home-list-persons');

    if (btnAddPerson) {
      fireEvent.click(btnAddPerson);
    }

    expect(mockedHistoryPush).toHaveBeenCalledTimes(1);
  });
});
