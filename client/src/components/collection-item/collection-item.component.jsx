import React from 'react';
import './collection-item.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

function CollectionItem({ collection }) {
    const { id, name, price, imageUrl } = collection


    const { addItemToCart, cartItems } = useContext(CartContext)

    const toggleIAddItem = () => {
        addItemToCart(collection)
        console.log(cartItems)
    };
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