import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import MernPage from './components/WorkshopPages/MernPage';
import Loading from './components/Loading';
import Decrypto from './components/TechEvents/Decrypto';
import ProjectExpo from './components/TechEvents/ProjectExpo';
import CodeCrack from './components/TechEvents/CodeCrack';
import KnowKnock from './components/TechEvents/KnowKnock';
import TechEscape from './components/TechEvents/TechEscape';
import BugHunt from './components/TechEvents/BugHunt';
import Treasure from './components/NonTechEvents/Treasure';
import RewindReflect from './components/NonTechEvents/RewindReflect';
import Meme from './components/NonTechEvents/Meme';
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
          <Route path='/project-expo' element={<ProjectExpo/>}/>
          <Route path='/code-crack' element={<CodeCrack/>}/>
          <Route path='/knock' element={<KnowKnock/>}/>
          <Route path='/tech-escape' element={<TechEscape/>}/>
          <Route path='/bug-bounty' element={<BugHunt/>}/>
          <Route path='/treasure-hunt' element={<Treasure/>}/>
          <Route path='/rewind' element={<RewindReflect/>}/>
          <Route path='/meme' element={<Meme/>}/>
        </Routes>
      </Router>
      }
    </div>
  );
}

export default App;
