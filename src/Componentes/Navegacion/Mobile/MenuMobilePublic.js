import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link  } from "react-router-dom/cjs/react-router-dom";

const MenuMobilePublic = (props) => {



    const classes = useStyles();
    return(
        <>
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                <Link to="/login" className={classes.LinkBarmobile} >
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>person</Icon>
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                </Link>
            </ListItem> 
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                <Link to="/carrito" className={classes.LinkBarmobile} >
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>Mis pedidos</ListItemText>
                </Link>
            </ListItem>
        
        
        </>
    )
}
export default MenuMobilePublic;
