import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  width: 100%;
  height: 100%;

  grid-template-columns: 1fr;
  grid-template-rows: 8rem auto 4rem;
  grid-template-areas:
    'HEADER'
    'MAIN'
    'FOOTER';
`;

export const Header = styled.div`
  display: flex;
  grid-area: HEADER;

  background-color: #3c3845;

  box-shadow: -1rem -0.7rem 1.4rem #3778cd;
`;

export const Main = styled.div`
  grid-area: MAIN;

  width: 100%;
  max-width: 1150rem;
  min-width: 100vw;

  padding: 2rem 4rem;
`;

export const Footer = styled.div`
  display: flex;
  grid-area: FOOTER;

  background-color: #3c3845;
`;
