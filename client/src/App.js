import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component.jsx';

import HomePage from './pages/homepage/homepage.component';
import GirlsPage from './pages/girls/girls.component';
import Authentication from './pages/authentication/authentication.component';
import Shop from './pages/shop/shop.component';
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/girls' element={<GirlsPage />} />
        <Route path='/authentication' element={<Authentication />} />
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
