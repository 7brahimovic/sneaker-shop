import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload
            }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesMap: payload,
                isLoading: false,
            }
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                error: payload,
                isLoading: false,
            }
        default:
            return state;
    }
}

const CATEGORIES_INITIAL_STATE = {
    categoriesMap: {},
    isLoading: false,
    error: null,
}