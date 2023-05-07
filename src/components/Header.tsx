import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons/faArrowTrendUp'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth, useLoginWithRedirect, ContextHolder, useAuthUser, AdminPortal } from "@frontegg/react";
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = () => {


  const { isAuthenticated } = useAuth();
  const user = useAuthUser();

  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };  

  const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
      setIsVisible(!isVisible)

    }
  
    const clicked = () => {
      setIsVisible(false)
    }
 return (
    <Navbar bg="dark sticky-top border-bottom border-top border-2 border-topbottom" expand="lg">
    <Container fluid>
        
    <FontAwesomeIcon icon={ faArrowTrendUp } className='text-white pl-2'/>
      <Navbar.Brand href="/#" className='text-white fw-bold pl-1'>Candles</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {
                      !  isAuthenticated ?

            <Nav.Link href="#" className='text-black' disabled><div> Restricted </div></Nav.Link>
            : 
            <Nav.Link href="/CandlesChart" className='text-white'><div> Free Candlestick Chart! </div></Nav.Link>
          }
          {/* <AuthorizedContent requiredRoles={['Admin']} >
          <Nav.Link href="/CandlesChart" className='text-white'>Chart</Nav.Link>
          </AuthorizedContent> */}

          <Nav.Link href="/Learn" className='text-white'>Learn Patterns</Nav.Link>
          <NavDropdown title="Account" className='text-white' id="basic-nav-dropdown">
          {
                      !  isAuthenticated ?

            <NavDropdown.Item href="/CandlesChart" className='text-black bg-light' onClick={ () => { loginWithRedirect()}}><div> Sign in </div></NavDropdown.Item>
            : 
            <>
            <NavDropdown.Item href='/#' className='text-black' disabled><div className='bg-light'> User: <u>{user.email}</u> </div></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/#' className='text-black bg-light' onClick={handleClick}><div> Admin Portal </div></NavDropdown.Item>
            <NavDropdown.Item href="/#" className='text-black bg-light' onClick={ () => { logout()}}><div> Sign out </div></NavDropdown.Item>
            </>
          }
          </NavDropdown>

          </Nav>
          <Form className="d-flex">
            
          <Nav.Link className='text-white mr-4' href="#" disabled>
            Welcome to Candles!
          </Nav.Link>
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

 );
};
