import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (): React.ReactElement => (
  <div>
  <h1>GPT-Shirts</h1>
  <Link
    to="/login"
    role="button"
  >
    Login
  </Link>
</div>
)

export default HomePage
