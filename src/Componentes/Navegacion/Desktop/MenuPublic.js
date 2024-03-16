import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Icon } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom";


const MenuPublic = () => {
    const classes = useStyles();


    return(
        <>
            <Button color ="inherit" className={classes.ButtonIcon}>
                <Link to="/carrito"  className={classes.linkBarDesktop}>
                    <Icon className={classes.mr}>shopping_cart</Icon>
                        Mis pedidos
                    </Link>
            </Button> 
            <Button color ="inherit" className={classes.ButtonIcon}>
                <Link to="/login"  className={classes.linkBarDesktop}>
                    <Icon className={classes.mr}>person</Icon>
                        Login
                    </Link>
            </Button> 
        
        </>
    );
};

export default MenuPublic
