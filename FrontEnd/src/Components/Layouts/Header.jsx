import React from 'react';
import { Container, Nav, NavDropdown, Navbar, Image, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../assets/img/logoBlanco.png';
import logo from '../../assets/img/logoHorizontal.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const {isManager,isEmpleado,setIsManager,setIsEmpleado} = props

  const handleClick = () =>{
    setIsManager(false)
    setIsEmpleado(false)
  }

    return (
<Navbar expand="lg" className="navbar">
      <Container className='text-center'>
        <Navbar.Brand as={NavLink} to='/select'>
          <Image className='logo' src={logo}></Image>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <h1 className='w-100 tituloHome'>SISTEMA DE GESTIÓN DE LENO</h1>
        
          <Nav className="ms-auto"> 
            {isManager? <NavItem as={NavLink} to='/select' className='d-flex align-items-center fs-4 fw-bolder border-2 btn btn-danger text-black '>
              Administrar
            </NavItem> : null}
             {!isEmpleado&&!isManager? <NavItem as={NavLink} to='/' className='d-flex align-items-center fs-4 fw-bolder border-2 btn btn-danger text-black '>
              Login
            </NavItem> : null}
            
            {isEmpleado||isManager? <NavDropdown title= {<Image src={logo2} className='avatarHeader'/>} id="basic-nav-dropdown">          
              <NavDropdown.Item as={NavLink} to="/" onClick={handleClick}><FontAwesomeIcon icon={faRightFromBracket} /> Cerrar Sesion</NavDropdown.Item>
            </NavDropdown>      : null }             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;