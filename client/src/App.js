import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component.jsx';

import HomePage from './pages/homepage/homepage.component';
import GirlsPage from './pages/girls/girls.component.jsx';

const MiyukiPage = () => (
  <div>
    <h1>MIYUKI PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Header/>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/girls' element={<GirlsPage/>} />
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
