export interface IContainerProps {
  isError: boolean;
}

export default interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}
