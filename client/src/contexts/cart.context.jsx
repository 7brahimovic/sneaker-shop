import { useReducer } from 'react';
import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (cartItems, productToRemove) => {
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

export const clearCartItem = (cartItems, productToClear) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id == productToClear.id
    );
    if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    clearItemFromCart: () => null,
    cartCount: 0,
    cartTotal: 0,
});


export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_OPEN: 'SET_CART_OPEN',
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'SET_CART_OPEN':
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const CartProvider = ({ children }) => {

    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    // useEffect(() => {
    //     const newCartCount = cartItems.reduce(
    //         (total, cartItem) => total + cartItem.price * cartItem.quantity,
    //         0
    //     );
    //     setCartTotal(newCartCount);
    // }, [cartItems]);

    // useEffect(() => {
    //     const newChartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    //     setCartCount(newChartCount);
    // }, [cartItems])

    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems, product);
        updateCartItemReducer(newCartItems)
    }
    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems, product);
        updateCartItemReducer(newCartItems)
    }
    const clearItemFromCart = (product) => {
        const newCartItems = clearCartItem(cartItems, product);
        updateCartItemReducer(newCartItems)
    }

    const setIsCartOpen = (isCartOpen) => {
        cartOpenReducer(isCartOpen)
    }

    const cartOpenReducer = (isCartOpen) => {
        const newCartOpen = isCartOpen;
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_OPEN, payload: {
                isCartOpen: newCartOpen
            }
        })
    }
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        );
        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
        );

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal,
            }
        })
    }

    // const AddToCartAction = (itemToAdd) => {
    //     dispatch({ type: CART_ACTION_TYPES.ADD_CART_ITEM, payload: itemToAdd });
    // }

    // const RemoveFromCartItem = (itemToRemove) => {
    //     dispatch({ type: CART_ACTION_TYPES.REMOVCE_CART_ITEM, payload: itemToRemove });
    // }

    // const ClearFromCartItem = (itemToClear) => {
    //     dispatch({ type: CART_ACTION_TYPES.CLEAR_CART_ITEM, payload: itemToClear });
    // }



    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
