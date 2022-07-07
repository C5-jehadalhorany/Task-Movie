import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from '../favorites';
import { Navbar, Container, Nav, Image, Button, Badge } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import("./style.css")



const NavbaR = () => {
 const navigate=useNavigate()

 const favState = useSelector((state) => {
    return {

        fav: state.fav.fav,

    };
});

useEffect(()=>{
    
},[favState.fav])

let a= favState.fav.length
    return <Navbar bg="secondary" variant="dark"  >
        <Container className='primary'>
            <Navbar.Brand href="/" className='home4'> Movie</Navbar.Brand>
            <Nav className="me-left ">
                {/* <Nav.Link href="#home" className='home1'>Home</Nav.Link> */}
                <Nav.Link href="" className='home2'></Nav.Link>
                <Nav.Link href="/favorites" className='home3'></Nav.Link>
                <button className='button_navbar' variant="primary" onClick={()=>{navigate("/favorites")}} >
                    My Fav <Badge bg="secondary">{a}</Badge>
                    <span className="visually-hidden"></span>
                </button>
            </Nav>
        </Container>
    </Navbar >
}

export default NavbaR