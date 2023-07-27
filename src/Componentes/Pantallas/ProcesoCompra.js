import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Step, StepLabel, Stepper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import useStyles from "../../Theme/useStyles";

const ProcesoCompra = () => {


    const [activeStep, setActiveStep] = useState(1);
    const continuarProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const RetrocederProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                <Grid> 
                    
                </Grid>
            ) : null}
        </Container>
    );
};

export default ProcesoCompra;