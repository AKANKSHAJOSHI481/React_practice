import React from "react";
import SignUp from "./SignUpForm.js";
import Login from "./LoginForm.js";
import frameImage from "../assests/frame.png"
import {FcGoogle} from "react-icons/fc"
export default function Template({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedin,
}) {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-8">
      <div className="w-11/12 max-w-[450px]">
        <h1
        className="text-white font-semibold text-[1.875rem] leading-[2.375rem]"
        >{title}</h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-white">{desc1}</span>
          <br/>
          <span className="text-white italic">{desc2}</span>
        </p>
        {formtype === "signup" ? <SignUp setIsLoggedin = {setIsLoggedin}/> : <Login setIsLoggedin = {setIsLoggedin}/>}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
        <FcGoogle/>
            <p>Sign in with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img src = {frameImage} alt = "Pattern" width = {558} height={504} loading="lazy" />
        <img src={image} alt = "Students" width = {558} height={504} loading="lazy" className="absolute -top-4 right-4"/>
      </div>
    </div>
  );
}
