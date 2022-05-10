import React from 'react';

import './girls.styles.scss';
import { Routes, Route, Link } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoriesMap, fetchCategoriesAsync } from '../../store/categories/categories.action';
import apis from '../../api/api';
import GIRLS_DATA from '../../girls.data';

function GirlsShop() {
  const dispatch = useDispatch();

  console.log('redrendering')
  // useEffect(() => {
  //   dispatch(fetchCategoriesAsync());
  // }, []);
  useEffect(() => {
    async function fetchData(){
      await apis.getShoplists().then(shoplist => {

        const list = {
          // title1: GIRLS_DATA[0].items,
          // title2: GIRLS_DATA[1].items,
          // title3: GIRLS_DATA[2].items,

          白石麻衣: shoplist.data[0].list,
          柏木由紀: shoplist.data[1].list,
          渡辺美優紀: shoplist.data[2].list,
          
        }
        // list[GIRLS_DATA[0].title] = GIRLS_DATA[0].items
        // list[GIRLS_DATA[1].title] = GIRLS_DATA[1].items
        // list[GIRLS_DATA[2].title] = GIRLS_DATA[2].items

        console.log(list)
        dispatch(setCategoriesMap(list))
      }
      ).finally()
    }
    async function fetchData1(){
      dispatch(fetchCategoriesAsync());
    }


    fetchData1()
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
