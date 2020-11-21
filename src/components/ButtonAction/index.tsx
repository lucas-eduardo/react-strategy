import { IButtonActionProps } from './IButtonAction';

import { Container } from './styles';

const ButtonAction = ({ Icon, text, callback }: IButtonActionProps) => {
  return (
    <Container onClick={callback}>
      {Icon && <Icon />} <span>{text}</span>
    </Container>
  );
};

export { ButtonAction };
