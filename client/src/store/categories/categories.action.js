import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import apis from '../../api/api';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import GIRLS_DATA from '../../girls.data';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async(dispatch) => {
  dispatch(fetchCategoriesStart())
  try {
    // const categoriesArray = await apis.getShoplists();
    const categoriesArray = GIRLS_DATA;
    console.log(categoriesArray)
    const list = {

      nike: categoriesArray[0].items,
      adidas: categoriesArray[1].items,
      // 渡辺美優紀: categoriesArray.data[2].list,
      
    }
    dispatch(fetchCategoriesSuccess(list));
  } catch(error) {
    dispatch(fetchCategoriesFailed(error));
  }
}