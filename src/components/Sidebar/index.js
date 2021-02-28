import React from 'react'
import {SidebarContainer ,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>

        <SidebarWrapper>
            <SidebarMenu>

            <SidebarLink to='about' onClick={toggle}>
                About
            </SidebarLink>

            <SidebarLink to='search' onClick={toggle}>
                Search
            </SidebarLink>

            <SidebarLink to='services' onClick={toggle}>
                Services
            </SidebarLink>

            <SidebarLink to='contact' onClick={toggle}>
                Contact Us
            </SidebarLink>

            </SidebarMenu>
            
        </SidebarWrapper>
        </SidebarContainer>

            
        </>
    )
}

export default Sidebar;
