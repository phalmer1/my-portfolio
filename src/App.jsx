import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Work from './components/Pages/Work';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {

  const [hidden , setHidden] = useState()

  setTimeout(() => {
    setHidden('hidden')
  },3000)


  return (
    <div className="bg-slate-200 h-full">
      <motion.div
        className={`w-screen h-screen  z-[3000000] top-0 left-0 fixed bg-black ${hidden}`}
        initial={{ height: '100vh' ,width: '100vw' }}
        animate={{ height: '0vh' ,width: '100vw'}}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <div className='w-[10%] h-[20%] flex items-center m-auto text-white'>
          loading
        </div>
      </motion.div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/work' element={<Work />}></Route>
      </Routes>
    </div>
  );
}

export default App;
