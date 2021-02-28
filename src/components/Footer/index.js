import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import 
{FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
FooterLinksWrapper,
SocialIconLink,
SocialIcons,
SocialMediaWrap,
WebsiteRights,SocialLogo} from './FooterElements';
const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle> About us</FooterLinkTitle>
                                <FooterLink> How it works </FooterLink>
                                <FooterLink> Terms of Service </FooterLink>
                                <FooterLink> Testimonials </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Contact us </FooterLinkTitle>
                                <FooterLink> Contact </FooterLink>
                                <FooterLink> Support </FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                           <FooterLinkTitle>Business</FooterLinkTitle> 
                                <FooterLink> Lorem ip </FooterLink>
                                <FooterLink> Lorem ip </FooterLink>
                            </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink> Instagram </FooterLink>
                                <FooterLink> Facebook </FooterLink>
                                <FooterLink> Twitter </FooterLink>
                            </FooterLinkItems>

                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>Gagetdeck</SocialLogo>
                    <WebsiteRights>Gagetdeck &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com' target='_blank'aria-label='facebook'><FaIcons.FaFacebook/></SocialIconLink>
                        <SocialIconLink href='//www.instagram.com' target='_blank'aria-label='instagram'><FaIcons.FaInstagram/></SocialIconLink>
                        <SocialIconLink href='//www.twitter.com' target='_blank'aria-label='twitter'><FaIcons.FaTwitter/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer;
