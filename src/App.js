import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import MernPage from './components/WorkshopPages/MernPage';
const Home=React.lazy(()=>import('./pages/Home'))
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/mern' element={<MernPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
