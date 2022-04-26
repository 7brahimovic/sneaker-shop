import {CART_ACTION_TYPES } from "./cart.types";

export const cartReducer = (state= CART_INITIAL_STATE, action={}) => {
    console.log('dispatched')
    console.log(action)
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            return state;
    }
}

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}
