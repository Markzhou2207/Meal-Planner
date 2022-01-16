import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'

// import NavLink from 'react-bootstrap/esm/NavLink'
import {NavLink} from 'react-router-dom'
const Navigation = ({setLoggedIn}) => {
  const handleLogout = () => {
    localStorage.clear()
    setLoggedIn(false);
  };
    return (
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home">MEAL <i class="fas fa-utensils"/></Navbar.Brand>
              <Nav className='myNavBar'>
                <NavLink id="navLink" to='/'className="nav-link active">Schedule</NavLink>
                <NavLink id="navLink" to="/recipes" className="nav-link active"> Meals</NavLink>
                <NavLink id="logoutLink"to="/" className="nav-link active" onClick={()=>handleLogout()}> Logout</NavLink>
              </Nav>
            </Container>
          </Navbar>
    )
}


export default Navigation
