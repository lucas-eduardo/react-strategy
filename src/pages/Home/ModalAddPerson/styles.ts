import styled from 'styled-components';
import { shade } from 'polished';

import { IWrapperInputProps } from './IModalAddPerson';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #3c3845;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 36px;
    height: 36px;

    background: transparent;
    border: 0;

    cursor: pointer;

    color: #fff;

    transition: color 0.2s ease-in;

    &:hover {
      color: ${shade(0.3, '#fff')};
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  padding: 30px 30px 50px 30px;

  display: flex;

  background-color: #ebf2f5;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;

    section.row {
      width: 100%;

      display: flex;
      flex-direction: column;

      legend {
        font-size: 2.2rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.6);

        margin-bottom: 15px;
      }

      & + section.row {
        margin-top: 40px;

        div + div {
          margin-left: 20px;
        }
      }

      div.content-input {
        display: flex;
        justify-content: space-between;
      }

      button {
        width: 100%;
        height: 40px;

        border: none;
        border-radius: 4px;
        background-color: #2aa747;

        color: #fff;

        font-size: 1.6rem;

        cursor: pointer;

        transition: background-color 0.2s ease-in;

        &:hover {
          font-weight: 700;
          background-color: ${shade(0.3, '#2AA747')};
        }
      }
    }
  }
`;

export const WrapperInput = styled.div<IWrapperInputProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || 280}px;
  height: fit-content;
`;
