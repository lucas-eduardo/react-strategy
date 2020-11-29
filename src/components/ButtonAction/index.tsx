import { IButtonActionProps } from './IButtonAction';

import { Container } from './styles';

const ButtonAction = ({
  Icon,
  text,
  callback,
  ...props
}: IButtonActionProps) => {
  return (
    <Container {...props} onClick={callback}>
      {Icon && <Icon />} <span>{text}</span>
    </Container>
  );
};

export { ButtonAction };
