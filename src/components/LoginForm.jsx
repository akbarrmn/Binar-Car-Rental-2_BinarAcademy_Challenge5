import React from "react";
import { TextField,Button, Paper, Grid} from "@mui/material";
import { Link } from "react-router-dom";

function LoginForm() {
    return(
        <div className="LoginForm">
                <form className="Form">
                    <Paper elevation={24}>
                        <Grid container style={{ padding:'2rem' }}>
                            <Grid item xs={12}>
                                <img src='/images/carLogo.png' alt="logo" style={{ width:'100%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <h2 style={{ marginTop: '2rem' }}>Welcome, Admin BCR</h2>
                                <TextField 
                                    style={{marginTop: '1rem', width: '100%'}} 
                                    id="outlined-basic" 
                                    label="Username" 
                                    variant="outlined" 
                                />
                                <TextField 
                                    style={{marginTop: '1rem', width: '100%'}} 
                                    id="outlined-password-input" 
                                    label="Password" 
                                    type="password" 
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Link to='/dashboard'>
                                    <Button 
                                        style={{marginTop: '1rem', width: '100%'}} 
                                        variant="contained">Sign in
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            
        </div>
    )
}

export default LoginForm;