import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, ListItemIcon, ListItemText, MenuItem, Icon, Menu } from "@material-ui/core";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useStateValue } from "../../../contexto/store";


const MenuCLiente = () => {
    const[ {sesionUsuario} , dispatch] = useStateValue();

    const[anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget);
    }
    const handleClose = ()=>{
        setAnchorEl(null);
    }

    const classes = useStyles();
    return(
        <>
            <Button color="inherit" className={classes.ButtonIcon}>
                <Link className={classes.linkBarDesktop} to="/carrito">
                    <Icon className={classes.mr}> shopping_cart</Icon>
                    Mis Pedidos
                </Link>
            </Button>
            <div>
                <Button color="inherit" className={classes.ButtonIcon}
                onClick={handleClick}>
                    <div className={classes.linkBarDesktop}>
                        <Avatar alt="mi imagen" 
                        className={classes.avatarPerfilAppBar}/>
                        { sesionUsuario ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + ' ' + sesionUsuario.usuario.apellido : "no sesion") : "no sesion" }
                        <Icon>keyboard_arrow_down</Icon>
                    </div>
                </Button>
                <Menu 
                elevation={2}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"

                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose ={handleClose}>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.LinkBarmobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi perfil</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.LinkBarmobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText>cerrar sesion</ListItemText>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
};
export default MenuCLiente;