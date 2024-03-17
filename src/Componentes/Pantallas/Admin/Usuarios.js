import React, {useState, useEffect} from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import {getUsuarios} from '../../../actions/UsuarioAction.js';
import {Pagination} from '@material-ui/lab';
import {withRouter} from 'react-router-dom';



const Usuarios = (props) => {
    const classes = useStyles();

    const [requestUsuarios, setRequestUsuarios] = useState({
        pageIndex : 1,
        pageSize : 3,
    });

    const [paginadorUsuarios, setPaginadorUsuarios] = useState({
        count : 0,
        pageIndex : 0,
        pageSize : 0,
        pageCount : 0,
        data : []
    });
    
    const handleChange = (event, value)=>{
        setRequestUsuarios((prev) => ({
            ...prev,
            pageIndex : value
        }));
    }

    useEffect( () => {
        
        const getlistaUsuarios = async () => {
            const response = await getUsuarios(requestUsuarios);
            setPaginadorUsuarios(response.data);
        }
    
        getlistaUsuarios();

    },[requestUsuarios])




    const editarUsuario = (id) => {
        props.history.push("/admin/Usuarios/" + id);
    }

    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Usuarios
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>UserName</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                                paginadorUsuarios.data.map((usuario) => ( 
                                    <TableRow key={usuario.id} >
                                        <TableCell>{usuario.id}</TableCell>
                                        <TableCell>{usuario.nombre + ' '+ usuario.apellido}</TableCell>
                                        <TableCell>{usuario.email}</TableCell>
                                        <TableCell>{usuario.username}</TableCell>
                                        <TableCell>
                                            <Button variant = 'contained' color = 'primary' onClick = {() => editarUsuario(usuario.id) }>
                                                <Icon>edit</Icon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>

                                ))
                            }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count = {paginadorUsuarios.pageCount} page = {paginadorUsuarios.pageIndex} onChange = {handleChange}></Pagination>
        </Container>

    );
};

export default withRouter(Usuarios);
