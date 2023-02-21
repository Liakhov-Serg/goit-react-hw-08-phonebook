import { useSelector } from 'react-redux';
import { } from 'react-router-dom';
// import authSelectors from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;