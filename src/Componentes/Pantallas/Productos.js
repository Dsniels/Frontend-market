import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../Theme/useStyles';
import { productoArray } from '../Data/DataPrueba';

const Productos = () => {

    const Array  = productoArray;

    const classes = useStyles();
    return(
        <Container className={classes.containermt}>
            <Typography variant ="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                {Array.map(data =>(
                <Grid item lg={3} md={4} sm ={6} xs={12} key = {data.key}>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        image='https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                        title = 'mi producto'>
                            <Avatar variant='square' className={classes.price}>
                            {data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h6' className={classes.text_card}>
                            {data.titulo}
                            </Typography>
                            <Button
                            variant='contained'
                            color='primary'
                            fullWidth>
                                Detalles
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    )
};

export default Productos;