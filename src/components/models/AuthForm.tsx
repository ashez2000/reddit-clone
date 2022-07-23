import { Fragment } from 'react'
import { useRecoilValue } from 'recoil'

import { authModelAtom } from '../../atoms/authModelAtom'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const AuthForm = () => {
  const authModelState = useRecoilValue(authModelAtom)

  return (
    <Fragment>
      {authModelState.view === 'login' && <LoginForm />}
      {authModelState.view === 'signup' && <SignUpForm />}
    </Fragment>
  )
}

export default AuthForm
