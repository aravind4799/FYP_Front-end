import React,{useState,useEffect} from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
    const [scrollNav,setscrollNav]=useState(false);

    const changeNav = () => {
        if(window.scrollY>=80){
            setscrollNav(true)
        }
        else{
            setscrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])
    
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    
    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    GagetDeck
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                        About
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='search'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Search</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Services</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Contact Us</NavLinks>
                    </NavItem>

                </NavMenu>
            </NavbarContainer>
        </Nav>
        
            
        </>
    )
}

export default Navbar
