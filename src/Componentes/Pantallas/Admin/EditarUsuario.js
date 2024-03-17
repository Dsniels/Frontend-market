import React, {useState, useEffect} from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from "@material-ui/core";
import {GetUsuariobyId, agregarRole} from '../../../actions/UsuarioAction.js';
import {withRouter} from 'react-router-dom';
import { useStateValue } from "../../../contexto/store.js";

const EditarUsuario = (props) => {
    const [{sesionUsuario}, dispatch] = useStateValue();
    const classes = useStyles();
    const [usuario, setUsuario] = useState({
        nombre : '',
        apellido:'',
        email:''
    });

    const[admin, setAdmin] = useState(false);
    const actualizarRoleUsuario = async(e) => {
        e.preventDefault();
        const id = props.match.params.id;
        const role = {
            nombre : "ADMIN",
            status : admin
        };

        const response = await agregarRole(id, role, dispatch);
        if(response.status === 200){
            props.history.push("/admin/usuarios");
        }
        else{
            dispatch({
                type : "OPEN_SNAKBAR",
                openMensaje : {
                    open : true,
                    mensaje : 'No es posible agregar role'
                }
            })
        }


    }

    const handleChange = (e) => {
        setAdmin(e.target.checked);
    }
    
    useEffect( () => {
        const id = props.match.params.id;
        const getUsuarioIdAsync = async() => {
            const response = await GetUsuariobyId(id);
            setAdmin(response.data.admin);
            setUsuario(response.data);
        }

        getUsuarioIdAsync();


    },[])

    return(
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg ={6} sm={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        Editar Usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField lable="nombre" 
                        variant="filled" 
                        value= {usuario.nombre + ' ' + usuario.apellido} 
                        fullWidth
                        disabled
                        className={classes.gridmb}
                        />
                        <TextField lable="Email" 
                        variant="filled" 
                        value={usuario.email} 
                        fullWidth
                        disabled
                        />
                        <FormControl className={classes.checkbox}>
                            <FormControlLabel control={<Checkbox color="primary"/>}
                            label ="Administrador"
                            checked = {admin}
                            onChange = {handleChange}
                            ></FormControlLabel>
                        </FormControl>
                        <Button variant="contained"
                        color="primary"
                        onClick = {actualizarRoleUsuario}>
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </Container>
    );
};

export default withRouter(EditarUsuario);
