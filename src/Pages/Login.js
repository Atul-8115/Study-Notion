import React from 'react'
import Template from "../Components/Template"
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tommorrow, and beyong."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype='login'
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login