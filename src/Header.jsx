import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from "reactstrap";
import { withRouter } from "react-router-dom";
import logo from "./images/logo.png";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const moveToHome = () => {
    props.history.push("/");
  };

  return (
    <div className="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <img src={logo} className="image" alt="logo" onClick={moveToHome} />
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

export default withRouter(props => <Header {...props} />);
