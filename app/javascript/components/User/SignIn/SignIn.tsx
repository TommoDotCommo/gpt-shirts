import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import axios from 'axios'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const response = await axios.post('/users/sign_in', {
        user: { email, password }
      })
      console.log(response)
      // Save authentication data and redirect, as needed.
    } catch (error) {
      console.error('Sign in failed:', error)
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
      />
      <button type="submit">Sign In</button>
    </form>
  )
}

export default SignIn
