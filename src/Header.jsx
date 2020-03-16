import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from "reactstrap";
import logo from "./images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} className="image" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavbarText>URL Shortener</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
