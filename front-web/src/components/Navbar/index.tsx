import React from 'react';
import { Nav } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Navbar: React.FC = () => (
  <Nav>
    <Logo />
    <a href="home">DS Delivery</a>
  </Nav>

);

export default Navbar;
