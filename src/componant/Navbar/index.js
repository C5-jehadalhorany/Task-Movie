import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import("./style.css")



const NavbaR = () => {
    return <Navbar bg="secondary" variant="dark"  >
        <Container className='primary'>
            <Navbar.Brand href="/" className='home4'> Movie</Navbar.Brand>
            <Nav className="me-left ">
                <Nav.Link href="#home" className='home1'>Home</Nav.Link>
                <Nav.Link href="" className='home2'></Nav.Link>
                <Nav.Link href="" className='home3'></Nav.Link>
            </Nav>
        </Container>
    </Navbar >
}

export default NavbaR