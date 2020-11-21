import styled from 'styled-components';
import { shade } from 'polished';

const buttonColor = '#3778cd';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 250px;
  height: 60px;

  background-color: ${buttonColor};
  border-radius: 0.4rem;
  border: 0;

  transition: background-color 0.2s ease-in-out;

  cursor: pointer;

  svg {
    margin-right: 1rem;

    width: 2.5rem;
    height: 2.5rem;

    color: #fff;
  }

  span {
    font-size: 2.2rem;
    color: #fff;
  }

  &:hover {
    background-color: ${shade(0.2, buttonColor)};
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.8rem;
    }
  }
`;
