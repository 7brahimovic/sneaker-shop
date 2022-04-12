import { useContext, useEffect } from 'react';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => {
            setIsCartOpen(!isCartOpen)
        


    };

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         console.log(isCartOpen)
    //         if (isCartOpen) {
    //             console.log('qqq')
    //             setIsCartOpen(false)
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // })


    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;
