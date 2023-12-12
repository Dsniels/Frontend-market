import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from "@material-ui/core";

const EditarUsuario = () => {
    const classes = useStyles();


    return(
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg ={6} sm={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        Editar Usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField lable="nombre" 
                        variant="filled" 
                        value="Daniel" 
                        fullWidth
                        disabled
                        className={classes.gridmb}
                        />
                        <TextField lable="Email" 
                        variant="filled" 
                        value="Daniel@gmail.com" 
                        fullWidth
                        disabled
                        />
                        <FormControl className={classes.checkbox}>
                            <FormControlLabel control={<Checkbox color="primary"/>}
                            label ="Administrador"
                            ></FormControlLabel>
                        </FormControl>
                        <Button variant="contained"
                        color="primary">
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </Container>
    );
};

export default EditarUsuario;