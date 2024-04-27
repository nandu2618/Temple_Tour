import { navigate, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from "./Register"
import Login from "./Login"
import Cards from "./cards";
import Card from 'react-bootstrap/Card';
function Home(){
    const navigate = useNavigate()
    return (
        
        <div id="bd">
            <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
      <Container>
      <Navbar.Brand to='/Home'><b>Piligrims<p style={{ fontSize: "75%" }}>virtualvisit</p></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href='/Login'>Login </Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
           
    </div>
    )
}
export default Home;
