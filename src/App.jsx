import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Work from './components/Pages/Work';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactMe from './components/Pages/ContactMe';

function App() {

  const [hidden , setHidden] = useState()

  setTimeout(() => {
    setHidden('hidden')
  },3000)


  return (
    <div className="bg-slate-200 px-[2vw] py-[1vh] h-full">
      <motion.div
        className={`w-screen h-screen  z-[3000000] top-0 left-0 fixed bg-black ${hidden}`}
        initial={{ height: '100vh' ,width: '100vw' }}
        animate={{ height: '0vh' ,width: '100vw'}}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <div className='w-[100%] h-[20%] text-center flex items-center justify-center text-white'>
          loading
        </div>
      </motion.div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/contactme' element={<ContactMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
