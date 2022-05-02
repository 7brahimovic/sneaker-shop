import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import Button from "../../components/button/button.component";
import apis, { createOrder } from "../../api/api";
import { selectCurrentUser } from "../../store/user/user.selector";

function Checkout() {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    console.log('ipen')

    const currentUser = useSelector(selectCurrentUser);
    // useEffect(() => {
    //     if(isCartOpen) {
    //         setIsCartOpen(false)
    //     }

    // })
    const saveOrder = () => {
        console.log(cartItems)
        console.log(currentUser.uid)
        apis.saveOrder({
            userId: currentUser.uid,
            cartItems: cartItems,
        })
    }

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>
                <div>TOTAL: ${cartTotal}</div>
                <Button onClick={saveOrder}>SAVE</Button>

            </div>

        </div>
    );
};

export default Checkout;

