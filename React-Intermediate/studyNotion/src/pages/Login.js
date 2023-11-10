import React from 'react'
import Template from '../components/Template.js'
import loginImg from '../assests/login.png'
export default function Login({setIsLoggedin}) {
  return (
    <Template 
      title = "welcome Back"
      desc1="Build skills fro today, tomorrow, and beyond."
      desc2 = "Educate to future-proof your career"
      image = {loginImg}
      formtype="login"
      setIsLoggedin={setIsLoggedin}
    />
  )
}
