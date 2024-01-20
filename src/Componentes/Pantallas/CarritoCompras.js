import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { productoArray } from '../Data/DataPrueba';
import useStyles from '../../Theme/useStyles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from '../../contexto/store';

const CarritoCompras = (props) => {

    const [{sesionCarrito}, dispatch] = useStateValue();
    
    console.log('sesioncarrito', sesionCarrito);


    const history = useHistory();
    const RealizarCompra = () =>{
        history.push("/ProcesoCompra");
    }
    const array = sesionCarrito ? sesionCarrito.items : [];
    const classes = useStyles();
    return(
        <Container className={classes.Container}>
            <Typography variant = "h4" className={classes.text_title}>
                Carrito
            </Typography>
            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm= {12} xs={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {array.map(item => (
                                    <TableRow key = {item.id}>
                                        <TableCell>
                                            <CardMedia className={classes.imgproductoCC}
                                            image='https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                                            title = {item.producto}></CardMedia>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_details}>
                                                {item.producto}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_details}>
                                                ${item.precio}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_details}>
                                                ${item.cantidad}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon>delete</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={3} md= {4} sm = {6} xs = {12}>
                    <Paper variant = "outlined" square className={classes.paperPadding}>
                        <Typography variant ="h6" className={classes.text_title}>
                            Subtotal ({array.length}) Productos
                        </Typography>
                        <Typography className={classes.text_title}>
                            $143.46
                        </Typography>
                        <Divider className={classes.gridmb}/>
                        <Button variant="contained" color ="primary" size ="large" onClick = {RealizarCompra}>
                            Comprar
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};
export default CarritoCompras;