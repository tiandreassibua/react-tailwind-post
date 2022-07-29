import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// componenets
import Nav from './components/Nav';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';

// pages
import Home from './pages/Home';
import Register from './pages/Register';
import LandingPages from './pages/LandingPages';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <LandingPages />
    // <>
    //   <Router>
    //     <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
    //     <Routes>
    //       <Route path='/' exact element={<Home />} />
    //       <Route path='/createpost' element={<CreatePost />} />
    //       <Route path='/register' element={<Register />} />
    //       <Route path='/login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
