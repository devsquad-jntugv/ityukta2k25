import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './components/Contact';
import MernPage from './components/WorkshopPages/MernPage';
function App() {
  return (
    <div className="">
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
