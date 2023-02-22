import { } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return
    <nav>
        
    </nav>

}
