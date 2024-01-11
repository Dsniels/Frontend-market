import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../Theme/useStyles";
import { Link } from 'react-router-dom';
import { LoginUsuario } from "../../actions/UsuarioAction";


/* 
const clearUsuario= {
    email : '',
    password : ''
} */



const Login = () => {

    const [usuario, setUsuario] = useState({
        email : '',
        password : ''    
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsuario(prev =>({
            ...prev,
            [name] : value
        }))
    }

    const loginEventoUsuario = () => {
        /* const respuesta = accesoUsuario(usuario);
        if(!respuesta.status){
            console.log("Email y psw incorrectos");
            return;
        }

        setUsuario(clearUsuario);
        console.log("bienvenido", respuesta.miUsuario.nombre) */

        LoginUsuario(usuario).then(response => {

            if(response.status === 200){
                window.localStorage.setItem('token', response.data.token);
                console.log("El login fue exitoso", response.data);
            }else {
                console.log("errores en el login", response.data);
            }


        })

    }


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
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing = {2}>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField
                                     label = "Email"
                                     variant = "outlined"
                                     fullWidth
                                     type = "email"
                                     name="email"
                                     value={usuario.email}
                                     onChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField
                                    label = "Password"
                                    variant = "outlined"
                                    fullWidth
                                    type = "password"
                                    name = "password"
                                    value={usuario.password}
                                    onChange={handleChange}>                                        
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <Button 
                                    variant ="contained"
                                    fullWidth
                                    color ="primary"
                                    onClick={loginEventoUsuario}>
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