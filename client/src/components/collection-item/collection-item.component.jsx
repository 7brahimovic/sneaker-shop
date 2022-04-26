import React from 'react';
import './collection-item.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';
import {  addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
function CollectionItem({ collection }) {
    const { id, name, price, imageUrl } = collection

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const toggleIAddItem = () => dispatch(addItemToCart(cartItems, collection));

    // const { addItemToCart, cartItems } = useContext(CartContext)

    // const toggleIAddItem = () => {
    //     console.log(collection)
    //     addItemToCart(collection)

    //     const newCartItems = addCartItem(collection);
        
    //     updateCartItemReducer(newCartItems)

    // };
    return (


        <div className='collection-item' onClick={toggleIAddItem}
        >
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}

            />
            {/* <div className='content' >
            <span className='subtitle'>FUCK NOW</span>
        </div> */}
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price/10000}万円</span>

            </div>
            {/* <Button buttonType='inverted'>Add to card</Button> */}

        </div>
    )
};

export default CollectionItem;