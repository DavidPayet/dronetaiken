import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import '../styles/NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar">
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src="/medias/logo_drone3.png" alt="logo" className="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="flex flex-row-reverse">
          <Nav navbar >
            <NavItem >
              <NavLink className="section-link" href="/basket" >Panier</NavLink>
            </NavItem>
            <NavItem >
              <NavLink className="section-link" href="/basket" >Connexion</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;