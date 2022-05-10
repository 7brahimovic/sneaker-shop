import { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';

import { CartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { setCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const ref = useRef(null);

  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            dispatch(setCartOpen(!isCartOpen))
        }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
}, []);


  return (
    <div className='cart-dropdown-container' ref={ref}>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;