import React from 'react';
import AuthorizationRouter from './components/authorization/authorization';
import UserSettingsRouter from './components/user-settings/user-settings';
import {BrowserRouter} from 'react-router-dom';
import PagesRouting from "./components/pages/pages-routing";

//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


//import './assets/js/main.js'

// Main Pages
//import MainPage from './routes/MainPage';


// header, footer
//import Header from './components/header/Header';
//import Footer from './components/footer/Footer';


function App() {
    return (
        <BrowserRouter>
            <AuthorizationRouter/>
            <UserSettingsRouter/>
            <PagesRouting/>
        </BrowserRouter>
    )
}

export default App;
