import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap"
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >海鹰商城</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-cart"></use>
                  </svg>
                购物车</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-person"></use>
                  </svg>
                登录</Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header >
  )
}

export default Header
