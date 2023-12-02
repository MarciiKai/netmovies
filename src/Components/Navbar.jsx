import {React} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';

const NetMoviesNavbar = () => {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">NetMovies</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Movies">Movies</Nav.Link>
          <Nav.Link href="/TvShows">TvShows</Nav.Link>
        </Nav>
      </Container>
    </Navbar>  
   
  </>
);
};


export default NetMoviesNavbar;