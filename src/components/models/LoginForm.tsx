import { useState, Fragment } from 'react'

import { useSetRecoilState } from 'recoil'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import OAuthButton from './OAuthButton'
import { authModelAtom } from '../../atoms/authModelAtom'

const LoginForm = () => {
  const setAuthModelState = useSetRecoilState(authModelAtom)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Fragment>
      <Form className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>

      <OAuthButton />

      <div className="text-center">
        New here ?
        <span
          className="text-primary cursor-pointer ms-1"
          onClick={() => setAuthModelState({ isOpen: true, view: 'signup' })}
        >
          Sign Up
        </span>
      </div>
    </Fragment>
  )
}

export default LoginForm
