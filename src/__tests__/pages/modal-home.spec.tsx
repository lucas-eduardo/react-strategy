import { render, fireEvent } from '@testing-library/react';

import { ModalAddPerson } from 'pages/Home/ModalAddPerson';

const mockHandleModal = jest.fn();

const mockPropsModal = () => ({
  handleModal: mockHandleModal,
  modalContent: () => {},
  setIsCenterContent: () => {}
});

describe('Page Home Modal', () => {
  it('should render home modal', () => {
    const { queryByTestId } = render(<ModalAddPerson instanceModal={mockPropsModal} />);

    expect(queryByTestId('page-home-modal')).toBeTruthy();
  });

  it('should click button close', () => {
    const { queryByTestId } = render(<ModalAddPerson instanceModal={mockPropsModal} />);

    const buttonClose = queryByTestId('page-home-modal-close');

    if (buttonClose) {
      fireEvent.click(buttonClose);
    }

    expect(mockHandleModal).toBeCalledTimes(1);
  });
});
