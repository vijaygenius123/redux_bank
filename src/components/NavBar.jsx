import {Link} from "react-router-dom"
import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">Account</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/settings">Settings</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
