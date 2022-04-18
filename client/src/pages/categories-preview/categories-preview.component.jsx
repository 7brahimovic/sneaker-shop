import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import { Link } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import { selectCurrentCategories } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  console.log('s')
  const categoriesMap = useSelector(selectCurrentCategories)
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Fragment>
            <h2>
              <Link className='title' to={title}>
                {title.toUpperCase()}
              </Link>
            </h2>
            <div className='girl-page'>
              <div className='collection-preview'>

                {products
                  .filter((product, key) => key < 3)
                  .map((product) => (
                    <CollectionItem key={product.id} collection={product} />
                  ))}
              </div>
            </div></Fragment>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
