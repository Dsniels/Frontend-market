import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { productoArray } from '../Data/DataPrueba';
import useStyles from '../../Theme/useStyles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CarritoCompras = () => {
    const history = useHistory();
    const RealizarCompra = () =>{
        history.push("/ProcesoCompra");
    }
    const array = productoArray;
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
                                {array.map(producto => (
                                    <TableRow key = {producto.key}>
                                        <TableCell>
                                            <CardMedia className={classes.imgproductoCC}
                                            image='https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                                            title = "Imagen en carrito"></CardMedia>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_details}>
                                                {producto.titulo}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_details}>
                                                ${producto.precio}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField select variant="outlined" size='small'>
                                                <MenuItem value = {1}>1</MenuItem>
                                                <MenuItem value = {2}>2</MenuItem>
                                                <MenuItem value = {3}>3</MenuItem>
                                                <MenuItem value = {4}>4</MenuItem>
                                            </TextField>
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