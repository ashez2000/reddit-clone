import { useSetRecoilState } from 'recoil'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { authModelAtom } from '../atoms/authModelAtom'

function Header() {
  const setAuthModelState = useSetRecoilState(authModelAtom)

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Reddit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="cursor-pointer"
              as="span"
              onClick={() => setAuthModelState({ isOpen: true, view: 'login' })}
            >
              Login
            </Nav.Link>
            <Nav.Link
              className="cursor-pointer"
              as="span"
              onClick={() =>
                setAuthModelState({ isOpen: true, view: 'signup' })
              }
            >
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
