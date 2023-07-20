import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography} from "@material-ui/core";
import React from "react";
import useStyles from "../../Theme/useStyles";
import { Link } from 'react-router-dom';

const Login = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}> 
            <Grid container justifyContent = "center">
                <Grid item lg={5} md={6}>
                    <Card className = {classes.card} align = "center">
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>person</Icon>
                        </Avatar>
                        <Typography variant ="h5" color ="primary">Ingrese su Usuario</Typography>
                        <form className={classes.form}>
                            <Grid container spacing = {2}>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField
                                     label = "Email"
                                     variant = "outlined"
                                     fullWidth
                                     type = "Email">
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField
                                    label = "Password"
                                    variant = "outlined"
                                    fullWidth
                                    type = "Password">                                        
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <Button 
                                    variant ="contained"
                                    fullWidth
                                    color ="primary">
                                        Ingresar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                            className={classes.link} 
                            to = "/registrar"
                            variant = "body1">
                            ¿No tienes una cuenta aun?</Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;