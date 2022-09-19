import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    
    <Navbar bg="light" className='d-inline-flex flex-column'>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto" >
          <div className=''>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </div>
          </Nav>
    </Navbar>
  );
}

export default BasicExample;