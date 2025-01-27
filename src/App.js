import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import MernPage from './components/WorkshopPages/MernPage';
import Loading from './components/Loading';
import Decrypto from './components/TechEvents/Decrypto';
const Home=React.lazy(()=>import('./pages/Home'))
function App() {
   const [loading,setLoading]=useState(true);
      useEffect(()=>{
          const timer=setTimeout(()=>setLoading(false),3000);
          return ()=>clearTimeout(timer)
        },[]);
  return (
    <div>
      {loading?<Loading/>:
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/mern' element={<MernPage/>}/>
          <Route path='/decrypto' element={<Decrypto/>}/>
        </Routes>
      </Router>
      }
    </div>
  );
}

export default App;
