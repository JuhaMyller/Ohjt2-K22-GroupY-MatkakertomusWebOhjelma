import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import navlogo from './navlogo.png'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';


function NavBar2() {
    return (
        <>
            <Wrapper>
                <Navbar expand="md">
                    <Container>
                        <Navbar.Brand className='img'><img src={navlogo}></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className='me-5' to="/">
                                    <Link to="/" className='link'>Etusivu</Link></Nav.Link>
                                <Nav.Link className='me-5'>
                                <Link to="matkakohteet" className='link'>Matkakohteet</Link>
                                </Nav.Link>
                                <Nav.Link className='me-5'><Link to="porukanmatkat" className='link'>Porukan Matkat</Link></Nav.Link>
                                <NavDropdown title="Marek" id="basic-nav-dropdown" className='link'>
                                    <NavDropdown.Item ><Link to="omatmatkat" className='droplink'>Omat matkat</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item ><Link to="omattiedot" className='droplink'>Omat tiedot</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item ><Link to="jasenet" className='droplink'>Jäsenet</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item ><Link to="#" className='droplink'>Kirjaudu ulos</Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.nav`
margin: 0px;
padding: 0px;
background: #fa7171;
`;


export { NavBar2 };