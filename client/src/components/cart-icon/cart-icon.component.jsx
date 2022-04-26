import { useContext, useEffect } from 'react';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';
import { useLocation } from 'react-router-dom'

import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)


    const toggleIsCartOpen = () => {
        dispatch(setCartOpen(!isCartOpen))
        // setIsCartOpen(!isCartOpen)
    };


    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;
