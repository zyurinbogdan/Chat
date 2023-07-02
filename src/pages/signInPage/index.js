import React from "react";
import styles from './index.module.css'
import { TextField, Button, Typography } from "@mui/material";
import {NavLink } from 'react-router-dom';

export const SignInPage = () => {
    return (
        <div className={styles.wrapper}>
            <form>
                <Typography variant="h3" textAlign="center">Sign In</Typography>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" required margin='normal' placeholder="Enter your email" fullWidth={true}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" required margin='normal' placeholder="Enter your password" fullWidth={true}/>
                <Button variant="contained" className={styles.signInBtn} >SIGN IN</Button>
                <NavLink to='/sign-up' className={styles.signUpBtn}>Don't have an account? Sign up</NavLink>
            </form>
        </div>
    );
};