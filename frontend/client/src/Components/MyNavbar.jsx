import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {

  return (
	<div className="nav-bar">
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Collapse>
					<Navbar.Brand href="/">MOON</Navbar.Brand>
					<Nav className="m-auto nav nav-tabs">
						<Nav.Link href="/pricing">Pricing</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/testimonies">Testimonies</Nav.Link>
						<Nav.Link href="/companies">Companies</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</div>
  )
}

export default MyNavbar