import React, { useState } from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Collapse, Link, ListItem, ListItemIcon, ListItemText,Icon, List } from "@material-ui/core";
import { withRouter} from 'react-router-dom';
import {useStateValue} from '../../../contexto/store.js'



const MenuMobile = (props) => {
    const [{sesionUsuario}, dispatch] = useStateValue();
    const[openCliente, setOpenCliente] = useState(false);
    const salirSesion = (e)=>{
        e.preventDefault();
        localStorage.removeItem("token");
        dispatch({
            type: "SALIR_SESION",
            nuevoUsuario : null,
            autenticado : false
        });

        props.history.push("/login");
    }

    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    }
    const classes = useStyles();

    return(
        <>
            <ListItem button onClick={handleClickCliente} className={classes.listItem}>
                <div className={classes.LinkBarmobile}>
                    <Avatar
                    alt="imagen"
                    className={classes.avatarPerfilAppBar}
                    src={
                            sesionUsuario ? (sesionUsuario.usuario.imagen ? sesionUsuario.usuario.imagen : '') : ''
                        }/>
                    
                    { sesionUsuario ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + ' ' + sesionUsuario.usuario.apellido : "no sesion") : "no sesion" }

                    <Icon> keyboard_arrow_down</Icon>
                </div>                
            </ListItem>
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.LinkBarmobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                                <ListItem button onClick = '/perfil'>
                                    <ListItemText>mi perfil</ListItemText>
                                </ListItem>

                            </ListItemIcon>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.LinkBarmobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                                <ListItem button onClick={salirSesion}> 
                                    <ListItemText>cerrar sesion</ListItemText>
                                </ListItem>
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                </List>            
            </Collapse>
            <ListItem button className={classes.listItem} onClick={props.clickHandler}>
                <Link className={classes.LinkBarmobile} to="/carrito">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                        <ListItemText>Mis Pedidos</ListItemText>
                    </ListItemIcon>
                </Link>
            </ListItem>
        </>
    );
};

export default withRouter(MenuMobile);
