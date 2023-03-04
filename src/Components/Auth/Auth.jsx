import React from 'react';
import {Outlet, Navigate} from "react-router";
import {useSelector} from "react-redux";


const Auth = () => {
    const auth = useSelector((state)=>state.user)
    console.log(auth)
    return (auth.access ?<Outlet/>:<Navigate to="/login"/>);
};

export default Auth;