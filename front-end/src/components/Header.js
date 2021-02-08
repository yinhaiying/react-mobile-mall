import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap"
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">海鹰商城</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-cart"></use>
                </svg>
                购物车</Nav.Link>
              <Nav.Link href="/login">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>
                登录</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
}

export default Header
