import React from 'react';
import Template from '../Components/Template';
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with Studynotion for free"
      desc1="Build skills for today, tommorrow, and beyong."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype='signup'
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
