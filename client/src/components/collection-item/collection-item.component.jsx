import React from 'react';
import './collection-item.styles.scss';


const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'
        >
        <div className='image'
            style={{ backgroundImage: `url(${imageUrl})` }}

        />
        {/* <div className='content' >
            <span className='subtitle'>FUCK NOW</span>
        </div> */}
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>

    </div>
);

export default CollectionItem;