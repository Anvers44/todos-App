import React, {useState} from 'react';
import styles from "./login.module.css"
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAccessToken, setUser} from "../../app/features/userslice";
import {useNavigate} from "react-router";


const LoginForm = () => {
    const navigate=useNavigate()
    const dispatch =useDispatch()
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const handleSubmit=async (e) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:3010/api/session", {username, password})
       dispatch( setUser(response.data.user.username))
       dispatch( setAccessToken(response.data.access))
        navigate("/login")
    }


    return (
        <div className={styles.container}>
            <div>Login</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input  id="username" placeholder="Username" type="text" onChange={(e)=>{setUsername(e.target.value)}}/>

                <label htmlFor="password">Password</label>
                <input id="password" placeholder="Password" type="password" autoComplete="off" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default LoginForm;