import React from 'react';

import IInput from './IInput';

import { Container } from './styles';

const Input = ({ isError = false, ...rest }: IInput) => {
  return (
    <Container isError={isError}>
      <input {...rest} />
    </Container>
  );
};

export { Input };
