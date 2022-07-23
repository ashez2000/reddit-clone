import type { NextPage } from 'next'

import AuthModel from '../components/models/AuthModel'

const Home: NextPage = () => {
  return (
    <div>
      <h2>Welcome to Next.js!</h2>
      <AuthModel />
    </div>
  )
}

export default Home
