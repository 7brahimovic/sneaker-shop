import { useContext, useEffect, useRef } from 'react';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';
import { useLocation } from 'react-router-dom'

import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setCartOpen } from '../../store/cart/cart.action';
import onClickOutside, { handleClickOutside } from "react-onclickoutside";

const CartIcon = () => {
    const ref = useRef(null);

    // const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             dispatch(setCartOpen(!isCartOpen))
    //         }
    //     };
    //     document.addEventListener('click', handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // }, []);



    const toggleIsCartOpen = () => {
        dispatch(setCartOpen(!isCartOpen))
        // setIsCartOpen(!isCartOpen)
    };

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen} ref={ref}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;



// const clickOutsideConfig = {
//     toggleIsCartOpen: () => CartIcon.toggleIsCartOpen,
// };
