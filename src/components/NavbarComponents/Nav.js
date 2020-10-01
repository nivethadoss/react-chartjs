import React, {useState} from 'react';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { SocialIcon } from 'react-social-icons';
import  styled  from  'styled-components';
 
const NavbarLight = () => {
  const [hidden, setHidden] = useState(true);
 
  return (
    
    <Navbar expandXl dark>
      <Nav start>
        <NavbarLink dark brand href="#">Production Monitoring Tool</NavbarLink>
        <Nav end>
          
        </Nav>
      </Nav>
      <Nav start collapse expandMd hidden={hidden}>
      {/*<NavbarLink dark active>Active</NavbarLink>*/}
        <NavbarLink dark ><SocialIcon url="http://linkedin.com/in/nivetha-doss-998483129/" style = {{height: 25, width: 25}}/></NavbarLink>
        <div class="topnav-right">
        <NavbarLink dark>Nivetha Doss </NavbarLink>
        </div>
      </Nav>
    </Navbar>
    
  );
};

export default NavbarLight


/*
import React from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";
 
function Navbar () {

    return (
      <ReactNavbar
        color="red"
        logo="https://svgshare.com/i/KHh.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }


export default Navbar
*/