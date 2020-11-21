import { Route as ReactRoute } from 'react-router-dom';

import IRouteProps from './IRoute';

const Route = ({ Component, ...rest }: IRouteProps) => {
  return <ReactRoute {...rest} render={() => <Component />} />;
};

export default Route;
