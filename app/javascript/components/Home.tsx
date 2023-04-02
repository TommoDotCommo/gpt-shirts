import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (): React.ReactElement => (
  <div>
  <h1>GPT-Shirts</h1>
  <Link to="/sign_in" role="button">
    Login
  </Link>
  <Link to="/sign_up" role="button">
    Sign Up
  </Link>
</div>
)

export default HomePage
