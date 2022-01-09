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
              <Navbar.Brand href="#home">MEAL <i class="fas fa-utensils"/></Navbar.Brand>
              <Nav className='myNavBar'>
                <NavLink id="navLink" to='/'className="nav-link active">Schedule</NavLink>
                <NavLink id="navLink" to="/recipes" className="nav-link active"> Meals</NavLink>
              </Nav>
            </Container>
          </Navbar>
        // <nav className="navbar navbar-expand-lg navbar-light bg-white">
        //   <div className="container-fluid">

        //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //       <ul className="navbar-nav ml-auto">
        //         <li className="nav-item">
        //           <NavLink className="nav-link active" to='/about'>About me</NavLink>
        //         </li>
        //           <li className="nav-item">
        //             <NavLink className="nav-link" to='/thoughts'>Thoughts</NavLink>
        //           </li>
        //           <li className="nav-item">
        //             <NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>
        //           </li>
        //           <li className="nav-item">
        //             <NavLink className="nav-link" to='/contacts'>Contacts</NavLink>
        //           </li>
        //       </ul>
        //     </div>
        //   </div>
        //   </nav>
    )
}


export default Navigation
