import React from 'react';

import './girls.styles.scss';
import { Routes, Route, Link } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../store/categories/categories.action';
import apis from '../../api/api';
import GIRLS_DATA from '../../girls.data';



function GirlsShop() {
  const dispatch = useDispatch();

  console.log('redrendering')
  useEffect(() => {
    async function fetchData(){
      await apis.getShoplists().then(shoplist => {
        console.log(GIRLS_DATA[1].items)
        const list = {
          mai: shoplist.data[0].list,
          yuki: shoplist.data[1].list,
        }
        console.log(list)
        dispatch(setCategoriesMap(list))
      }
      )
    }

    fetchData()
    console.log('effect fired')
    // const getCategoriesMap = async () => {
    //   const categoryMap = await getCategoriesAndDocuments();
    //   console.log(categoryMap)
    //   dispatch(setCategoriesMap(categoryMap))
    // };

    // getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default GirlsShop;
