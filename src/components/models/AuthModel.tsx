import { useRecoilState } from 'recoil'
import Modal from 'react-bootstrap/Modal'

import { authModelAtom } from '../../atoms/authModelAtom'
import AuthForm from './AuthForm'

function AuthModel() {
  const [authModelState, setAuthModelState] = useRecoilState(authModelAtom)

  const handleClose = () =>
    setAuthModelState((state) => ({ ...state, isOpen: false }))

  return (
    <Modal show={authModelState.isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          {authModelState.view === 'login' && 'Login'}
          {authModelState.view === 'signup' && 'Signup'}
          {authModelState.view === 'forgot' && 'Password Reset'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AuthForm />
      </Modal.Body>
    </Modal>
  )
}

export default AuthModel
