import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import NavbarTop from './NavbarTop'; 
import styles from './css/Navbar.module.css'; 

function AppNavbar() {
  return (
    <>
      <NavbarTop /> {/*  NavbarTop component */}
      <Navbar className={styles.navbarContainer} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className={styles.navbarBrand}>Stock Price Prediction</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.navMenu}`}> 
              <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="#link" className={styles.navLink}>Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" className={styles.navDropdown}>
                <NavDropdown.Item href="#action/3.1" className={styles.dropdownItem}>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className={styles.dropdownItem}>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className={styles.dropdownItem}>Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className={styles.dropdownItem}>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className={`d-flex ${styles.searchForm}`}>
              <FormControl
                type="search"
                placeholder="Search"
                className={`me-2 ${styles.searchInput}`}
                aria-label="Search"
              />
              <Button variant="outline-light" className={styles.searchButton}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
