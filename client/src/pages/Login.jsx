import React, { useEffect } from 'react'
//components
import Login from "../components/Login/Login"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { isAuthenticate } = useSelector((state) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticate === true) {
      navigate("/")
    }
  },[])
  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage


