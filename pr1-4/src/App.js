import React from "react";
import About from './components/About'
import MainPage from './components/MainPage'
import classes from './components/style.module.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
function App() {
  return (
    <div className={classes.body}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage time="вечер" date="15.03.2023" />}/>
        <Route path='about' element={<About number="4" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
