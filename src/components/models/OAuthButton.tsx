import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const OAuthButton = () => {
  return (
    <div className="d-grid mb-3">
      <Button variant="secondary">
        <Image
          className="me-2"
          width={24}
          src="/icons/google.svg"
          alt="google logo"
        />
        Sign In With Google
      </Button>
    </div>
  )
}

export default OAuthButton
