import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, ListItemIcon, ListItemText, MenuItem, Icon, Menu } from "@material-ui/core";
import { useState } from "react";
import { Link } from 'react-router-dom';


const MenuAdmin = () => {
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
            
                <Button color="inherit" className={classes.ButtonIcon}
                onClick={handleClick}>
                    <div className={classes.linkBarDesktop}>
                        <Icon className={classes.mr}>admin_panel_settings</Icon>
                            ADMIN
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
                        <Link className={classes.LinkBarmobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>Usuarios</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.LinkBarmobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.LinkBarmobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </MenuItem>
                </Menu>

        </>
    );

};

export default MenuAdmin;