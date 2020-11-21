import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { IModalContextData, IModalProviderProps } from './IModal';

import { Container, WrapperModal } from './styles';

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

const ModalProvider: React.FC<IModalProviderProps> = ({ children, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isCenterContent, setIsCenterContent] = useState(false);
  const [showDivModal, setShowDivModal] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const handleModal = useCallback(() => {
    if (showDivModal) {
      setModalOpen(false);

      setTimeout(() => {
        setShowDivModal(false);
      }, 500);
    } else {
      setShowDivModal(true);

      setTimeout(() => {
        setModalOpen(true);
      }, 150);
    }
  }, [showDivModal]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target) {
        const eventTarget = event.target as HTMLDivElement;

        if (eventTarget.id === id) {
          handleModal();
        }
      }
    }

    function handleKeyboardEsc({ keyCode }: { keyCode: number }) {
      if (keyCode === 27) {
        handleModal();
      }
    }

    if (showDivModal) {
      document.addEventListener('click', handleClick);
      document.addEventListener('keyup', handleKeyboardEsc);
    }

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', handleKeyboardEsc);
    };
  }, [handleModal, id, showDivModal]);

  return (
    <ModalContext.Provider
      value={{ handleModal, modalContent: setModalContent, setIsCenterContent }}
    >
      <Container>
        {children}

        {showDivModal && (
          <WrapperModal
            id={id}
            modalOpen={modalOpen}
            isCenter={isCenterContent}
          >
            {modalContent}
          </WrapperModal>
        )}
      </Container>
    </ModalContext.Provider>
  );
};

function useModal(): IModalContextData {
  const context = useContext(ModalContext);

  return context;
}

export { ModalProvider, useModal };
