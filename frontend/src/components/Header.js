import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { logout } from "../store/actions/userActions.js";
import SearchBox from "./SearchBox"
import { Route } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";

const Header = ({ history }) => {
  const dispatch = useDispatch();
  // 通过useSelector去拿到用户信息
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log("history:", history)
  const onLogout = () => {
    dispatch(logout());
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >海鹰商城</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />}></Route>

            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-cart"></use>
                  </svg>
                购物车</Nav.Link>
              </LinkContainer>

              {
                userInfo ? (
                  <NavDropdown title={userInfo.name} id="dropdown">

                    <LinkContainer to="/profile">
                      <NavDropdown.Item >
                        个人信息
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={onLogout}>
                      退出登陆
                      </NavDropdown.Item>
                  </NavDropdown>) :
                  (<LinkContainer to="/login">
                    <Nav.Link>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-person"></use>
                      </svg>
                登录</Nav.Link>
                  </LinkContainer>)
              }


            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar >
    </header >
  )
}

export default Header
