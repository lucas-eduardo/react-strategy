import styled, { css } from 'styled-components';

import { IWrapperModalProps } from './IModal';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const WrapperModal = styled.div<IWrapperModalProps>`
  display: ${({ isCenter }) => (isCenter ? 'flex' : 'block')};

  ${({ isCenter }) =>
    isCenter &&
    css`
      align-items: center;
    `}

  width: 100%;
  height: 100%;

  position: absolute;

  padding: 1.5rem;

  background-color: rgba(0, 0, 0, 0.6);

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1010;

  opacity: ${({ modalOpen }) => (modalOpen ? 1 : 0)};

  transition: opacity 0.5s linear 0s;

  overflow-y: auto;

  @media (min-width: 640px) {
    padding: 5rem 3rem;
  }

  @media (min-width: 960px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
