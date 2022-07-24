import { useState, Fragment, FormEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

import { auth } from '../../lib/firebase/app'
import OAuthButton from './OAuthButton'
import { authModelAtom } from '../../atoms/authModelAtom'

const LoginForm = () => {
  const setAuthModelState = useSetRecoilState(authModelAtom)
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  return (
    <Fragment>
      <Form className="mb-3" onSubmit={handleSubmit}>
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
        <div className="d-grid mb-3">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </div>

        <div className="mb-3">
          {error && <p className="text-center text-danger">{error.message}</p>}
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
