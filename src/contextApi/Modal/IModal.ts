export interface IModalContextData {
  handleModal: () => void;
  modalContent: (content: JSX.Element) => void;
  setIsCenterContent: (isCenter: boolean) => void;
}

export interface IModalProviderProps {
  id: string;
}

export interface IWrapperModalProps {
  id: string;
  modalOpen: boolean;
  isCenter: boolean;
}
