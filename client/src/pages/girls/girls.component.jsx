import React from 'react';

import rape from '../../asset/rape.mp4'
import './girls.styles.scss';
import { ProductsContext } from '../../contexts/products.context.jsx';
import { useContext } from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx';

function GirlsPage() {
    const { products } = useContext(ProductsContext);


    return (
        <div className='girl-page'>

            <div className='collection-preview'>

                {products.map((product) => (
                    <CollectionItem key={product.id} collection={product} />
                ))
                }
            </div>
            {/* <CollectionPreview collections={products}/> */}
            {/* <video className='videoTag' autoPlay loop muted>
                <source src={rape} type='video/mp4' />
            </video> */}
        </div>
    )

}

export default GirlsPage;
