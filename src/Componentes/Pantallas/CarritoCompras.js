import { Container, Typography } from '@material-ui/core';
import React from 'react';

const CarritoCompras = () => {
    const classes = useStyles();
    return(
        <Container className={classes.Container}>
            <Typography varian = "h4" className={classes.text_title}>
                Carrito
            </Typography>
        </Container>
    )
}