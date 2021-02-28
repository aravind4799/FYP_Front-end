import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSelection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Category from '../components/Category';
import {homeObjOne,homeObjThree} from '../components/InfoSection/Data';
import Search from '../components/Search';
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
                <Route path='/electronics' component={Search}/>
                <Route path='/sports' component={Search}/>
                <Route path='/kitchen' component={Search}/>
                <Route path='/books' component={Search}/>
                <Route path='/fashion' component={Search}/>   
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
