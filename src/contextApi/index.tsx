import { BrowserRouter } from 'react-router-dom';

import { ModalProvider } from './Modal';

const AppProvider: React.FC = ({ children }) => (
  <ModalProvider id="modal">
    <BrowserRouter>{children}</BrowserRouter>
  </ModalProvider>
);

export { AppProvider };
