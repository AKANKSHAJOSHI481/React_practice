import React from 'react'
import { Navigate } from 'react-router';
// import Dashboard from '../pages/Dashboard';

const PrivateRoute = ({isLoggedin, children})=>{
   
    if(isLoggedin){
        return children
    }
    else{
        return <Navigate to = "/login"/>
    }
}
export default PrivateRoute