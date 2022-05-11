import { createContext, useState, useEffect, useReducer } from 'react';
import SNEAKERS_DATA from '../sneakers.data';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_USER: 'SET_CATEGORIES_USER',
}
const INITIAL_STATE = {
  categoriesMap: {}
}
const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CATEGORIES_USER':
      return {
        ...state,
        categoriesMap: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
  
}
export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
  const setCategoriesMap = (categories) => {
    dispatch({ type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_USER, payload: categories })
  }
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
