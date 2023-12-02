import {React} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';

const NetMoviesNavbar = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">NetMovies</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">TvShows</Nav.Link>
        </Nav>
      </Container>
    </Navbar>  
   
  </>
);
};


export default NetMoviesNavbar;