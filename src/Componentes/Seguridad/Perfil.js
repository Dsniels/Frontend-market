import React, {useState, useEffect} from 'react';
import useStyles from '../../Theme/useStyles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Avatar, Button, Container, Divider, Grid, TextField, Typography,Icon, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import {useStateValue} from '../../contexto/store.js'
import {v4 as uuidv4} from 'uuid';
import { actualizarUsuario} from '../../actions/UsuarioAction.js';
import {withRouter} from 'react-router-dom';



const Perfil = (props) => {
    const classes = useStyles();
    const  [{sesionUsuario}, dispatch] =useStateValue();
    
    const [usuario, setUsuario] = useState({
        id : '', 
        nombre :'',
        apellido : '',
        imagen : '',
        password : '',
        file:'',
        email:'',
        imagenTemporal:''
    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setUsuario(prev => ({
            ...prev,
            [name]:value
        }));
    }
    
    useEffect(()=>{
        if(sesionUsuario){
            setUsuario(sesionUsuario.usuario);
        }

    },[sesionUsuario])
    
    const subirImagen = (imagenes) => {
        let foto = imagenes[0];
        let fotourl = '';

        try {
            fotourl = URL.createObjectURL(foto);
        } catch (e) {
            console.log(e);
        }

        setUsuario((prev) => ({
            ...prev,
            file: foto,
            imagenTemporal : fotourl
        }));

    }
    
    const guardarUsuario = (e) => {
        e.preventDefault();
        actualizarUsuario(sesionUsuario.usuario.id, usuario, dispatch)
        .then(response => {
            if(response.status === 200){
                window.localStorage.setItem('token', response.data.token);
                props.history.push("/");
            }else{
                dispatch({
                    type: "OPEN_SNAKBAR",
                    openMensaje : {
                        open :true,
                        mensaje : 'Errores actualizando el usuario'
                    }
                });
            }

        })

    }



    const keyImage = uuidv4();

    const history = useHistory();
    const verDetalles = () =>{
        const id = "151516516565";
        history.push("/ordenCompra/" + id);
    }   
    

    return(
        <Container className={classes.containermt}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <Typography variant='h5' className={classes.text_title}>
                        Perfil
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <ImageUploader onChange={subirImagen} key ={keyImage} withIcon={false} buttonStyles={{borderRadius: "50%", padding: 10, margin: 0,
                        position: "absolute", botton: 15, left:15 }}
                        className={classes.imageUploader}
                        buttonText={<Icon>add_a_photo</Icon>}
                        label ={
                            <Avatar alt = "mi perfil" className={classes.avatarPerfil} src = {
                                    usuario.imagenTemporal ? usuario.imagenTemporal : (usuario.imagen ? usuario.imagen : '')
                                } />
                        }
                        imgExtension={['.jpg', '.png', '.jpeg']}
                        maxFileSize={5242880}/>
                        <TextField
                        label ="Nombre"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        name = "nombre"
                        value={usuario.nombre}
                        onChange = {handleChange}/>
                        <TextField
                        label ="Apellido"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        value={usuario.apellido}
                        onChange = {handleChange}
                        name = "apellido"/>
                        <TextField
                        label ="Email"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        value={usuario.email}
                        name = "email"
                        onChange = {handleChange}
                        />
                        <Divider className={classes.Divider}/>
                        <TextField
                        label ="password"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        />
                         <TextField
                        label ="confirm password"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        />
                        <Button onClick = {guardarUsuario} variant='contained'
                        color='primary' >
                            Actualizar
                        </Button>

                    </form>
                </Grid>
                <Grid item md={9} xs={12}>
                    <Typography variant='h5' className={classes.text_title}>
                        Mis compras
                    </Typography>
                    <TableContainer className={classes.form}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Pagado</TableCell>
                                    <TableCell>Entregado</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell>151516516565</TableCell>
                                <TableCell>2023 - 11 - 27</TableCell>
                                <TableCell>$152</TableCell>
                                <TableCell>2023 - 11 - 2</TableCell>
                                <TableCell>
                                    <Icon className={classes.iconNotDelivered}>
                                        clear
                                    </Icon>
                                    <Icon className={classes.iconDelivered}>
                                        check
                                    </Icon>
                                </TableCell>
                                <TableCell >
                                    <Button variant='contained' onClick={verDetalles}> Detalles</Button>
                                </TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </Container>
    )
};

export default withRouter(Perfil);
