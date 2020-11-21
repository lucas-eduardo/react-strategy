import { IconType } from 'react-icons';

export interface IButtonActionProps {
  Icon?: IconType;
  text: string;
  callback: () => void;
}
