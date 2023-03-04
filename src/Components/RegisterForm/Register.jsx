import React, {useState} from 'react';
import styles from "./register.module.css";
import axios from "axios";
import {useNavigate} from "react-router";


const Register = () => {
    const navigate =useNavigate()
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()

        axios.post("http://localhost:3010/api/register",{username,email,password})
        .then(function (response){
            console.log(response.config.data)
        })
        .catch(function (error){
            console.log(error)
        })
        navigate("/login")
    }

    return (
        <div className={styles.container}>
            <div>Register</div>
            <form className={styles.form}  onSubmit={handleSubmit }>
                <label htmlFor="username">Username</label>
                <input id="username" placeholder="Username " type="text"  onChange={(e)=>{setUsername(e.target.value)}}/>
                {username && <p>error</p>}
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Email " type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label htmlFor="password">Password</label>
                <input  id="password" placeholder="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                <button type="submit">Send</button>
            </form >

        </div>
    );
};

export default Register;