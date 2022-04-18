import React, { Fragment } from 'react';

import rape from '../../asset/rape.mp4'
import './girls.styles.scss';
import { ProductsContext } from '../../contexts/categories.context.jsx';
import { useContext } from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx';
import { Routes, Route, Link } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../store/categories/categories.action';


function GirlsShop() {
    const dispatch = useDispatch();

    console.log('redrendering')
    useEffect(() => {
        console.log('effect fired')
        const getCategoriesMap = async () => {
          const categoryMap = await getCategoriesAndDocuments();
          dispatch(setCategoriesMap(categoryMap))
        };
        
        getCategoriesMap();
      }, [dispatch]);
      
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category/>} />
        </Routes>
    )
}

export default GirlsShop;
