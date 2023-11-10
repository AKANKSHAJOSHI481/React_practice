import React from 'react'
import Template from '../components/Template.js'
import signupImg from '../assests/signup.png'
export default function SignUp({setIsLoggedin}) {
  return (
    <Template 
      title = "Join the millions learning to code with StudyNotion for free"
      desc1="Build skills fro today, tomorrow, and beyond."
      desc2 = "Educate to future-proof your career"
      image = {signupImg}
      formtype="signup"
      setIsLoggedin={setIsLoggedin}
    />
  )
}
