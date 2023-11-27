import React from "react";
import useStyles from "../../Theme/useStyles";
import { Button, CardMedia, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@material-ui/core";

const OrdenCompra = (props) => {
    const classes = useStyles();
    const mensajeEnvio = "No entregado";
    const mensajePago = "No pagado";
    const {id} = props.match.params;
    return (
        <Container className={classes.containermt}>
            <Typography variant="h5" className={classes.text_title} >
                Orden de Compra: {id.toUpperCase()}
            </Typography>
            <Grid container spacing={2} className={classes.paperPadding}>   
                <Grid item md={8} xs={12}>
                    <Typography variant="h6" className={classes.text_title}>
                        Envio
                    </Typography>
                    <Typography variant="body2" className={classes.textEnvio}>
                        Nombre : Daniel Salazar
                    </Typography>
                    <Typography variant="body2" className={classes.textEnvio}>
                        Email : dsnielsalar@gmail.com
                    </Typography>
                    <Typography variant="body2" className={classes.textEnvio}>
                        Direccion : Calle, colonia, ciudad
                    </Typography>
                    <div className={classes.alertNotDeliverded}>
                        <Typography variant ="body2" className={classes.text_title}>
                            {mensajeEnvio}
                        </Typography>
                    </div>

                    <Divider className={classes.Divider}/>
                    <Typography variant="h6" className={classes.text_title}>
                        Metodo de pago
                    </Typography>
                    <Typography>
                        Metodo : paypal
                    </Typography>
                    <div className={classes.alertDeliverded}>
                        <Typography variant ="body2" className={classes.text_title}>
                            {mensajePago}
                        </Typography>
                    </div>
                    <Divider className={classes.Divider}/>
                    <Typography variant="h6" className={classes.text_title}>
                        Productos
                    </Typography>
                    <TableContainer className={classes.gridmb}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <CardMedia className={classes.imgproductoPC} image="" title="imagen"/>     
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_details}>
                                            Playera tigres
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_details}>
                                            2 x $250 = 500
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer> 
                </Grid> 
                <Grid item md={4} xs={12}>
                    <TableContainer component={Paper} square>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Typography  variant = "h6"  className={classes.text_title}>
                                            Resumen del Pedido
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                                Productos
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                                $500
                                            </Typography>
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                            Envio
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                                $2
                                            </Typography>
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                                Impuesto
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                                $   6   
                                            </Typography>
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                            Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography  className={classes.text_title}>
                                                $511
                                            </Typography>
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                            <Button variant="contained" 
                                            color="primary" size="large" 
                                            fullWidth
                                            className={classes.gridmb}>
                                            paypal
                                            </Button>
                                            <Button variant="contained" 
                                            size="large" 
                                            fullWidth
                                            >
                                            tarjeta
                                            </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrdenCompra;