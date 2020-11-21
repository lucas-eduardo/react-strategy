import styled from 'styled-components';

import { IContainerProps } from './IInput';

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 40px;

  background-color: transparent;
  border-bottom: 2px solid
    ${({ isError }) =>
      isError ? 'rgba(255, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.6)'};

  input {
    width: 100%;
    height: 100%;

    background-color: transparent;
    border: none;

    color: rgba(0, 0, 0, 0.6);

    &::placeholder {
      font-size: 1.2rem;

      transition: font-size 0.2s ease-in;
    }

    &:focus::placeholder {
      font-size: 1.6rem;
    }

    &:disabled {
      color: rgba(0, 0, 0, 0.3);

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
