import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSelection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Category from '../components/Category';
import {homeObjOne,homeObjThree} from '../components/InfoSection/Data';
import Electronics from '../components/Electronics';
import Sports from '../components/Sports';
import Cellphones from '../components/Cellphones';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'

const Home = () => {
    const [isOpen,setIsOpen] =useState(false);

    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            
            <Router>
            <Category/>

            <Switch>
                <Route path='/electronics'>
                    <Electronics 
                     getpopular='http://127.0.0.1:5000/electronics/getpopular'
                     getsearchimgdata= 'http://127.0.0.1:5000/electronics/getsearchimgdata'
                     getdata='http://127.0.0.1:5000/electronics/getdata'
                     getrecommendations='http://127.0.0.1:5000/electronics/getrecommendations'
                     getsimilarimage='http://127.0.0.1:5000/electronics/getsimilarimage'
                    />
                </Route>

                <Route path='/sports'>
                <Sports 
                     getpopular='http://127.0.0.1:5000/sports/getpopular'
                     getsearchimgdata= 'http://127.0.0.1:5000/sports/getsearchimgdata'
                     getdata='http://127.0.0.1:5000/sports/getdata'
                     getrecommendations='http://127.0.0.1:5000/sports/getrecommendations'
                     getsimilarimage='http://127.0.0.1:5000/sports/getsimilarimage'
                    />
               
                </Route>

                <Route path='/kitchen'>
                <Electronics 
                     getpopular='http://127.0.0.1:5000/getpopular'
                     getsearchimgdata= 'http://127.0.0.1:5000/getsearchimgdata'
                     getdata='http://127.0.0.1:5000/getdata'
                     getrecommendations='http://127.0.0.1:5000/getrecommendations'
                     getsimilarimage='http://127.0.0.1:5000/getsimilarimage'
                    />
               
                </Route>

                <Route path='/cellphone'>
                <Cellphones 
                     getpopular='http://127.0.0.1:5000/cellphone/getpopular'
                     getsearchimgdata= 'http://127.0.0.1:5000/cellphone/getsearchimgdata'
                     getdata='http://127.0.0.1:5000/cellphone/getdata'
                     getrecommendations='http://127.0.0.1:5000/cellphone/getrecommendations'
                     getsimilarimage='http://127.0.0.1:5000/cellphone/getsimilarimage'
                    />
               
                </Route>

                <Route path='/fashion'>
                <Electronics 
                     getpopular='http://127.0.0.1:5000/getpopular'
                     getsearchimgdata= 'http://127.0.0.1:5000/getsearchimgdata'
                     getdata='http://127.0.0.1:5000/getdata'
                     getrecommendations='http://127.0.0.1:5000/getrecommendations'
                     getsimilarimage='http://127.0.0.1:5000/getsimilarimage'
                    />
               
                </Route>  

            </Switch>
            </Router>
            
            <InfoSection {...homeObjOne}/>
            {/* <InfoSection {...homeObjTwo}/> */}
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home;

// from flask import Flask
// import pandas as pd
// from flask import request
// import json
// from flask_cors import CORS 
// app = Flask(__name__)
// CORS(app)