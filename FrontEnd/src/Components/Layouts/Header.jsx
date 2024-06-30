import React from 'react';
import { Container, Nav, NavDropdown, Navbar, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../assets/img/logoBlanco.png';
import logo from '../../assets/img/logoHorizontal.png';

const Header = () => {
    return (
<Navbar expand="lg" className="navbar">
      <Container className='text-center'>
        <Navbar.Brand href="#home">
          <Image className='logo' src={logo}></Image>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      
          <h1 className='w-100 tituloHome'>SISTEMA DE GESTIÓN DE LENO</h1>
        
          <Nav className="ms-auto">
            <div>
        
            </div>
          <NavDropdown title= {<Image src={logo2} className='avatarHeader'/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faRightFromBracket} /> Cerrar Sesion</NavDropdown.Item>
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;