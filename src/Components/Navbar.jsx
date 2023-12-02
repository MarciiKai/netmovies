import {React} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';

const NetMoviesNavbar = () => {
  return (
    <>
    <Navbar className='navbar' expand = "lg">
      <Container>
        <Navbar.Brand href="/" className="brand">NetMovies</Navbar.Brand>
        < Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Movies">Movies</Nav.Link>
          <Nav.Link href="/TvShows">TvShows</Nav.Link>
          <Nav.Link href="/Animations">Animations</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
   
  </>
);
};


export default NetMoviesNavbar;