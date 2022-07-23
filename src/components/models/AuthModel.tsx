import { useRecoilState } from 'recoil'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { authModelAtom } from '../../atoms/authModelAtom'

function AuthModel() {
  const [authModelState, setAuthModelState] = useRecoilState(authModelAtom)

  const handleClose = () =>
    setAuthModelState((state) => ({ ...state, isOpen: false }))

  return (
    <Modal show={authModelState.isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>This text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AuthModel
