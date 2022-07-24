import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../lib/firebase/app'

const OAuthButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  return (
    <div className="d-grid mb-3">
      <Button
        variant="secondary"
        disabled={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          className="me-2"
          width={24}
          src="/icons/google.svg"
          alt="google logo"
        />
        {loading ? 'Signing in with Google' : 'Sign in with Google'}
      </Button>
    </div>
  )
}

export default OAuthButton
