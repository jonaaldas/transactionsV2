import { Nav, Navbar, Container, NavItem, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function NavBarComponent() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand>
            <Link className="nav-link text-secondary" to="/">Transaction Managment</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/transactions/archived">Archvies</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/login">Login</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/register">Register</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="w-full flex items-center justify-center py-4">
        <Link to={`/transactions/add`}>
          <Button className='add-transaction-btn center' variant='secondary'>Add New Transaction</Button>
        </Link>
      </div>
    </>
  );
}

export default NavBarComponent;