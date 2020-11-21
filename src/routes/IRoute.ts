import { RouteProps } from 'react-router-dom';

export default interface IRouteProps extends RouteProps {
  Component: React.ComponentType;
}
