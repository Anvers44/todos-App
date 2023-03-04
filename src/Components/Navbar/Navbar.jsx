import styles from  "./Navbar.module.css"
import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>

        </div>
    );
};

export default Navbar;