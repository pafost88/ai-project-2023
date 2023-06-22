import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import './assets/js/main.js'

// Main Pages
import MainPage from './routes/MainPage';


// header, footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './assets/styles/styles.scss';





function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
