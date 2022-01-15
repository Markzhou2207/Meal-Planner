import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'

// import NavLink from 'react-bootstrap/esm/NavLink'
import {NavLink} from 'react-router-dom'
const Navigation = ({title}) => {
    
    return (
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home">MEAL <i className="fas fa-utensils"/></Navbar.Brand>
              <Nav className='myNavBar'>
                <NavLink id="navLink" to='/'className="nav-link active">Schedule</NavLink>
                <NavLink id="navLink" to="/recipes" className="nav-link active"> Meals</NavLink>
              </Nav>
            </Container>
          </Navbar>
    )
}


export default Navigation
