import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ pathRoute, children }) {
  const isUserLogin = useSelector(state => state.user.isLoggedIn);
  if (!isUserLogin) {
    return <Navigate to={pathRoute} replace />;
  }

  return children;
}
