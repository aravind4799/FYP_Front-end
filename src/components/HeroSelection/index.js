import React,{useState} from 'react';

import Video from '../../Videos/video.mp4';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight}from '../HeroSelection/HeroSelectionElements';
import {Button} from '../ButtonElement';
const HeroSection = () => {
    const [hover,setHover]=useState(false);

    const onHover= ()=>{
        setHover(!hover);
    }
    return (
        <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
        
            <HeroContent>
                <HeroH1> Shopping Made Easy</HeroH1>
                <HeroP> We make sure you get best value for your money! </HeroP>
                <HeroBtnWrapper>
                <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Learn More {hover ? <ArrowForward/> :<ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    );
}

export default HeroSection;
