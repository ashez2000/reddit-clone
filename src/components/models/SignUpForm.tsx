import { useState, Fragment, FormEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

import { auth } from '../../lib/firebase/app'
import OAuthButton from './OAuthButton'
import { authModelAtom } from '../../atoms/authModelAtom'

const SignUpFrom = () => {
  const setAuthModelState = useSetRecoilState(authModelAtom)
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid mb-3">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </div>

        <div className="mb-3">
          {error && <p className="text-center text-danger">{error.message}</p>}
        </div>
      </Form>

      <OAuthButton />

      <div className="text-center">
        Already a redditer ?
        <span
          className="text-primary cursor-pointer ms-1"
          onClick={() => setAuthModelState({ isOpen: true, view: 'login' })}
        >
          Login
        </span>
      </div>
    </Fragment>
  )
}

export default SignUpFrom
