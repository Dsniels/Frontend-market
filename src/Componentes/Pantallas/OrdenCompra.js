import React from "react";
import useStyles from "../../Theme/useStyles";
import { Container, Typography } from "@material-ui/core";

const OrdenCompra = () => {
    const classes = useStyles();

    return (
        <Container className={classes.containermt}>
            <Typography variant="h6" className={classes.text_title} >
                Orden de Compra
            </Typography>
        </Container>

    );
};

export default OrdenCompra;