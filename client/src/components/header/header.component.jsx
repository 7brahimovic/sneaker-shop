import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import rape from '../../asset/rape.mp4'
import { UserContext } from '../../contexts/user.context';
import './header.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
function Header() {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <div className="header">
                <Link className='logo-container' to='/'>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={rape} type='video/mp4' />
                    </video>
                </Link>
                <div className="options">
                    <Link className='option' to='/girls'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <div>
                            Hello! {currentUser.displayName}
                        </div>
                    ) : ('')
                    }
                    {currentUser ? (

                        <span className='option' onClick={signOutHandler}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='option' to='/authentication'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>

    )
}

export default Header;