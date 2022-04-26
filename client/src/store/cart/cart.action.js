import {CART_ACTION_TYPES} from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

 const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

 const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem) {
    if (existingCartItem.quantity == 1) {
      return cartItems
    } else {

      return cartItems.map((cartItem) =>
        cartItem.id == productToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }

  }
}

 const clearCartItem = (cartItems, productToClear) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToClear.id
  );
  if (existingCartItem) {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
  }
}

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setCartItems = (cartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
};

export const setCartOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, isCartOpen);

