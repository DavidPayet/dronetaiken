import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from '../context';

import '../styles/NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.itemsCount;

  return (
    <div className="NavBar">
      <Navbar light expand="md">
        <Link to="/">
          <img src="/medias/logo_drone3.png" alt="logo" className="logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="flex flex-row-reverse">
          <Nav navbar >
            <NavItem >
              <Link className="section-link" to="/panier">
                <FiShoppingCart className="cart" />
                Panier ({numItems})
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;