import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../Theme/useStyles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Detalles = () => {
    const classes = useStyles();
    const history = useHistory();
    const agregarCarrito = () => {
        history.push("/carrito")
    }
    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Playera tigres
            </Typography>
            <Grid container spacing={4}>
                    <Grid item lg={8} md={8} xs={12}>
                        <Paper className={classes.PaperImg} variant ="outlined" square>
                            <CardMedia 
                            className={classes.mediaDetail}
                            image='https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                            title="mi producto"
                            ></CardMedia>
                        </Paper>
                    </Grid>
                
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>  
                                    <TableCell>
                                        <Typography variant='subtitle2'>precio</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='subtitle2'>$25.99</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>  
                                    <TableCell>
                                        <Typography variant='subtitle2'>Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                        size="small"
                                        select
                                        variant="outlined">
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={1}>2</MenuItem>
                                            <MenuItem value={1}>3</MenuItem>
                                        </TextField>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button variant ="contained"
                                        color="primary"
                                        size="large"
                                        onClick={agregarCarrito}>
                                            Agregar al Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_details}>Precio: $25.99</Typography>
                            <Typography className={classes.text_details}>unidades: 59</Typography>
                            <Typography className={classes.text_details}>marca: Tigres</Typography>
                            <Typography className={classes.text_details}>Tipo: Deportivo</Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography className={classes.text_details}>Descripcion: Hola</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Detalles;