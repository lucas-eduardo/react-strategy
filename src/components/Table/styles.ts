import styled, { css } from 'styled-components';

import { IContainerProps, ITBodyProps, ITHeadProps } from './ITable';

export const Container = styled.table<IContainerProps>`
  width: 100%;

  margin-bottom: 1rem;

  color: rgb(191, 191, 191);

  border-collapse: collapse;

  ${({ isBordered }) =>
    isBordered &&
    css`
      border: 0.1rem solid rgb(54, 54, 54);
    `}
`;

export const WrapperHead = styled.thead<ITHeadProps>`
  th {
    vertical-align: bottom;

    border-bottom: 0.2rem solid rgb(54, 54, 54);

    padding: 0.75rem;

    text-align: -webkit-match-parent;

    ${({ isBordered }) =>
      isBordered &&
      css`
        border-bottom-width: 0.2rem;
        border: 0.1rem solid rgb(54, 54, 54);
      `}

    ${({ isSmall }) =>
      isSmall &&
      css`
        padding: 0.3rem;
      `}
  }
`;

export const WrapperBody = styled.tbody<ITBodyProps>`
  ${({ isStriped }) =>
    isStriped &&
    css`
      tr:nth-of-type(2n + 1) {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}

  ${({ isHovered }) =>
    isHovered &&
    css`
      tr:hover {
        color: rgb(191, 191, 191);
        background-color: rgba(0, 0, 0, 0.075);
      }
    `}

  td {
    vertical-align: top;

    border-bottom: 0.2rem solid rgb(54, 54, 54);

    padding: 0.75rem;

    ${({ isBordered }) =>
      isBordered &&
      css`
        border: 0.1rem solid rgb(54, 54, 54);
      `}

    ${({ isSmall }) =>
      isSmall &&
      css`
        padding: 0.3rem;
      `}
  }
`;
