import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import axios from 'axios'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const response = await axios.post('/users', {
        user: { email, password }
      })
      console.log(response)
      // Save authentication data and redirect, as needed.
    } catch (error) {
      console.error('Sign up failed:', error)
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
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp
