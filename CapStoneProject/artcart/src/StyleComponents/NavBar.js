import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 .navbar {
   background-color: #261818;
 }

 .navbar-brand, .navbar-nav .nav-link {
   color: #EDDADA;

   &:hover {
     color: white;
   }
 }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"> ARTCART </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/Landing"></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Landing"> Landing</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Home"> Home</Nav.Link></Nav.Item>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
  </Styles>
)
