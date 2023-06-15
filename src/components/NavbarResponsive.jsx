import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuIcon, CloseIcon } from '../assets';
import { profilepic } from '../assets'
import { ContactButton } from '../components';


const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    position: fixed;
    font-size: 0.8rem;
    gap: 50px;
    padding-left: 8em;

    @media screen and (min-width: 767px) {
        position: fixed;
        justify-content: start;
        background-color: white;
        width: 100vw;
        height: 20vh;
    }


    @media screen and (max-width:767px) {
        position: fixed;
        background-color: #222;
        flex-direction: column;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        place-items: center;
        text-align: center;
        z-index: 998;
        display: ${({ open }) => open ? 'flex' : 'none'};
    
}
`;


const StyledLink = styled(Link)`
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: medium;
    text-decoration: none;
    transition: all 0.3s;
        &:hover {
            color: lightgray;
        }

        @media screen and (max-width:767px) {
        font-size: xx-large;
        display: none;
        color: #fff;
        display: flex;
        flex-direction: column;
}
`;

const MenuButton = styled.button`
    background-color: unset;
    border: 0;
    position: fixed;
    right: 40px;
    top: 40px;
    cursor: pointer;
    z-index: 999;
    display: none;

    @media screen and (max-width:767px) {
        display: flex;
}
`;

const StyledCloseIcon = styled.img`
        color: #fff;
`;



const NavBarLinks = () => {
    return (
        <>
            {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            <div className="profile-pic">
                <img src={profilepic} alt="profile-pic" className='picture' />
            </div>
            <ContactButton />
        </>
    )
}

const links = [
    {
        id: 1,
        to: "/",
        text: "Home"
    },
    {
        id: 2,
        to: "/about",
        text: "About"
    },
    {
        id: 3,
        to: "/work",
        text: "Work"
    },
    {
        id: 4,
        to: "/cases",
        text: "Cases"
    },
];

const MenuToggle = ({ open }) => {
    return open ?

        <StyledCloseIcon src={CloseIcon} />
        :
        <img src={MenuIcon} alt='menu-icon' />

}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledNav open={open}>
                <NavBarLinks />
            </StyledNav>
            <MenuButton open={open} onClick={() => setOpen(!open)}>
                <MenuToggle open={open} />
            </MenuButton>
        </>
    );
}

export default Navbar;