import { IModalContextData } from '../../../contextApi/Modal/IModal';

export interface IWrapperInputProps {
  maxWidth?: number;
}

export interface IModalAddPersonProps {
  instanceModal(): IModalContextData;
}
