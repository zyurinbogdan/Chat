import React from "react";
import styles from './index.module.css'
import { TextField, Button, Typography } from "@mui/material";
import {NavLink } from 'react-router-dom';

export const SignUpPage = () => {
    return (
        <div className={styles.wrapper}>
            <form>
                <Typography variant="h3" textAlign="center">Sign Up</Typography>
                <TextField id="outlined-basic" label="Username" variant="outlined" required margin='normal' placeholder="Enter your username" fullWidth={true}/>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" required margin='normal' placeholder="Enter your email" fullWidth={true}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" required margin='normal' placeholder="Enter your password" fullWidth={true}/>
                <Button variant="contained" className={styles.signUpBtn} >SIGN UP</Button>
                <NavLink to='/' className={styles.signInBtn}>Already have an account? Sign in</NavLink>
            </form>
        </div>
    );
};