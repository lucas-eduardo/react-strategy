import { Container, Header, Main, Footer } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />

    <Main>{children}</Main>

    <Footer />
  </Container>
);

export { Layout };
