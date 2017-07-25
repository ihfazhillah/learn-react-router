import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing react router
import {BrowserRouter, Match, IndexRoute} from 'react-router';
import Car from './component/Car.js';
import Home from './component/Home.js';
import About from './component/About.js';
import Main from './component/Main.js';
import CarDetail from './component/CarDetail.js';
import Surat from './component/Surat.js';


ReactDOM.render(
    <BrowserRouter>
        <div>
        <Match exactly pattern="/" component={Home}/>
        <Match exact pattern="/car/:id?" component={Car}/>
        <Match exact pattern="/surat/:nomor?" component={Surat}/>
        <Match pattern="/about" component={About}/>
        </div>
    </BrowserRouter>, document.getElementById('root'));

