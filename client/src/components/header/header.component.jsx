import React, { Fragment, useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import logo from '../../asset/crown.svg'
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
import { setCartItems } from '../../store/cart/cart.action';
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import FemaleIcon from '@mui/icons-material/Female';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ReactComponent as CrwnLogo } from '../../asset/crown.svg';

function Header() {
    const isCartOpen = useSelector(selectIsCartOpen);
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signOutHandler = async () => {
        await signOutUser();
        // dispatch(setCartItems([]))
    };

    const [state, setState] = React.useState(false);


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const IconSwitch = (text) => {
        switch (text) {

            case "Home": return <HomeIcon />;
            case "Sneakers": return <FemaleIcon />;
            case "Checkout": return <ShoppingCartCheckoutIcon />;
            case "Posts": return <PostAddIcon />;
            case "Signin": return <LoginIcon />;
            case "Signout": return <LogoutIcon />;
            default: return <h1>No Icon matches!</h1>
        }
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button key='Home' component={Link} to='/'>
                    <ListItemIcon>
                        {IconSwitch('Home')}
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button key='Sneakers' component={Link} to='/sneakers'>
                    <ListItemIcon>
                        {IconSwitch('Sneakers')}
                    </ListItemIcon>
                    <ListItemText primary='Sneakers' />
                </ListItem>
                <ListItem button key='Checkout' component={Link} to='/checkout'>
                    <ListItemIcon>
                        {IconSwitch('Checkout')}
                    </ListItemIcon>
                    <ListItemText primary='Checkout' />
                </ListItem>
                <ListItem button key='Posts' component={Link} to='/'>
                    <ListItemIcon>
                        {IconSwitch('Posts')}
                    </ListItemIcon>
                    <ListItemText primary='Posts' />
                </ListItem>
            </List>
        </Box>
    );


    return (
        <Fragment>
            <NavigationContainer>
                <div style={{ alignSelf: 'center' }}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        < MenuIcon />
                    </IconButton>

                </div>
                <Drawer
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
                <NavLinks>
                    {currentUser ? (
                        <div>
                            Hello! {currentUser.displayName}
                        </div>
                    ) : ('')
                    }
                    {currentUser ? (

                        <NavLink as='span' className='option' onClick={signOutHandler}>
                            SIGNOUT
                        </NavLink>
                    ) : (
                        <NavLink to='/signin'>
                            SIGNIN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Header;

