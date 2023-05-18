import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrinho from '../../Pages/Carrinho/Carrinho'
import Produtos from '../../Pages/Produtos/Produtos';
import './Header.css';

function Header() {
  return (
    <Navbar bg="secondary" expand="xl" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="../../Pages/Carrinho/Carrinho'">Carrinho</Nav.Link>
            <Nav.Link href="../../Pages/Produtos/Produtos">Produtos</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;