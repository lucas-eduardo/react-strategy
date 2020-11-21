import { AppProvider } from './contextApi';

import GlobalStyle from './styles/GlobalStyle';

import { Layout } from './@layout';

import Routes from './routes';

import './miragejs';

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </AppProvider>
  );
}

export default App;
