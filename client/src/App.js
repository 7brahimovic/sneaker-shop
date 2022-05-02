import React, { Component, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component.jsx';

import HomePage from './pages/homepage/homepage.component';
import GirlsPage from './pages/girls/girls.component';
import Authentication from './pages/authentication/authentication.component';
import Checkout from './pages/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCategoriesMap } from './store/categories/categories.action';
import { getCategoriesAndDocuments } from './utils/firebase/firebase.utils';
import apis from './api/api';
import { setCartItems } from './store/cart/cart.action';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log('ftf')
      dispatch(setCurrentUser(user));
      console.log(user)
      // if (user) {
      //   apis.getOrder(user.uid).then(cartItems => {
      //     dispatch(setCartItems(cartItems.data.cartItems))
      //   })

      // }
    });

    return subscribe;
  }, [dispatch]);



  return (
    <div >
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/girls/*' element={<GirlsPage />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>

  )
}
// class App extends Component {
//   render() {
//     return <div className='App'>
//       <Homepage />      
//       </div>;
//   }
// }

export default App;
