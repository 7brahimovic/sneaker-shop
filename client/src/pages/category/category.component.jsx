import { useContext, useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { CategoriesContext } from '../../contexts/categories.context';
import { selectCurrentCategories } from '../../store/categories/categories.selector';

import './category.styles.scss';

const Category = () => {
  // const { category } = useParams();
  // console.log(category)
  // const categoriesMap = useSelector(selectCurrentCategories)
  // console.log(categoriesMap)
  // const [products, setProducts] = useState(categoriesMap[category]);

  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

  console.log('rerendering')

  const { category } = useParams();
  const categoriesMap = useSelector(selectCurrentCategories);
  // const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired')
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='girl-page'>
        <div className='collection-preview'>{
          categoriesMap[category] && categoriesMap[category].map((product) => (
            <CollectionItem key={product.id} collection={product} />

          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
