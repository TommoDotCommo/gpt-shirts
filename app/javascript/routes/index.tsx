import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import SignIn from '../components/User/SignIn/SignIn'
import SignUp from '../components/User/SignUp/SignUp'

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
    </Routes>
  </Router>
)
