import { Button, Card, CardMedia, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableFooter, TableRow, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useStyles from "../../Theme/useStyles";

const ProcesoCompra = () => {
    const history = useHistory();
    const [activeStep, setActiveStep] = useState(1);
    const continuarProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const RetrocederProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const RealizarCompra = () => {
        const IdCompra = "";
        history.push("/OrdenCompra/" + IdCompra);
    


    }
    const classes = useStyles();
    return(
        <Container className={classes.Containermt}>
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Envio</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Metodo de pago</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Realizar Pedido</StepLabel>
                </Step>
            </Stepper>
            {activeStep === 1 ? (
                <Grid item md = {6} xs = {12} className={classes.gridPC}> 
                    <Typography variant ="h6" className ={classes.text_title}>
                        Envio Producto
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()}  className={classes.form}>
                        <Grid container spacing ={4}>
                            <Grid item xs = {12}>
                                <TextField label ="Direccion" fullWidth InputLabelProps={{
                                    shrink : true
                                }}/>                                
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField label ="Ciudad" fullWidth InputLabelProps={{
                                    shrink : true
                                }}/>                                
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField label ="Pais" fullWidth InputLabelProps={{
                                    shrink : true
                                }}/>                                
                            </Grid>
                            <Grid item xs = {12}>
                                <Button variant ="contained" color ="primary" onClick={continuarProceso}>
                                    Continuar
                                </Button>
                            </Grid>
                        </Grid>                        
                    </form>
                </Grid>
            ) : activeStep === 2 ? (
                <Grid item md = {3} xs = {12} className={classes.gridPC}> 
                    <Typography variant="h6" className={classes.text_title} >Metodo de Pago</Typography>
                    <Grid container spacing= {2}>
                        <Grid item xs ={12}>
                            <FormControl className={classes.FormControl}>
                                <FormLabel>
                                    Seleccione Metodo
                                </FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value = "paypal" control={<Radio color="primary"/>} label="paypal o tarjeta"/>
                                </RadioGroup>                                
                            </FormControl>
                            <Grid item xs = {12}>
                                <Button variant ="contained" color ="primary" onClick={RetrocederProceso} className={classes.ButtonAnterior}>
                                    Anterior
                                </Button>
                                <Button variant ="contained" color ="primary" onClick={continuarProceso}>
                                    Continuar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ): activeStep === 3 ? (
                <Grid container className={classes.gridPC}>
                    <Grid item md={8} xs={12} className={classes.gridLR}>
                        <Typography variant="h6" className={classes.text_title}>
                            Envio
                        </Typography>
                        <Typography>
                            Direccion : Calle, colonia, ciudad
                        </Typography>
                        <Divider className={classes.Divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                            Metodo de pago
                        </Typography>
                        <Typography>
                            Metodo : paypal
                        </Typography>
                        <Divider className={classes.Divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                            Productos
                        </Typography>
                        <TableContainer className={classes.gridmb}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <CardMedia className={classes.imgproductoPC} image title="imagen"></CardMedia>
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
                        <Button variant="contained" color="primary" onClick={RetrocederProceso}>
                            Anterior
                        </Button>
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
                                                $5
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
                                                $510
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Button variant="contained" color="primary" size="large" onClick={RealizarCompra}>Realizar Pedido</Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    
                </Grid>
            ) : null}
        </Container>
    );
};

export default ProcesoCompra;