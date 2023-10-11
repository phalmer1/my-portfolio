import { Route, Routes, useLocation} from 'react-router-dom';
import './App.scss';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Work from './components/Pages/Work';
import { useEffect } from 'react';

function App() {

  
 
  return (
    <div className="bg_main h-screen p-[20px]">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
