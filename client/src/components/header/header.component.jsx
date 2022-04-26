import React, { Fragment, useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import rape from '../../asset/rape.mp4'
import { UserContext } from '../../contexts/user.context';
// import './header.styles.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from './header.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector'
function Header() {
    const isCartOpen = useSelector(selectIsCartOpen);
    const currentUser = useSelector(selectCurrentUser)

    const signOutHandler = async () => {
        await signOutUser();
    };
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={rape} type='video/mp4' />
                    </video>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/girls'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <div>
                            Hello! {currentUser.displayName}
                        </div>
                    ) : ('')
                    }
                    {currentUser ? (

                        <NavLink as='span' className='option' onClick={signOutHandler}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/authentication'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>



        // <Fragment>
        //     <div className="header">
        //         <Link className='logo-container' to='/'>
        //             <video className='videoTag' autoPlay loop muted>
        //                 <source src={rape} type='video/mp4' />
        //             </video>
        //         </Link>
        //         <div className="options">
        //             <Link className='option' to='/girls'>
        //                 SHOP
        //             </Link>
        //             {currentUser ? (
        //                 <div>
        //                     Hello! {currentUser.displayName}
        //                 </div>
        //             ) : ('')
        //             }
        //             {currentUser ? (

        //                 <span className='option' onClick={signOutHandler}>
        //                     SIGN OUT
        //                 </span>
        //             ) : (
        //                 <Link className='option' to='/authentication'>
        //                     SIGN IN
        //                 </Link>
        //             )}
        //             <CartIcon/>
        //         </div>
        //         {isCartOpen && <CartDropdown/>}
        //     </div>
        //     <Outlet/>
        // </Fragment>

    )
}

export default Header;