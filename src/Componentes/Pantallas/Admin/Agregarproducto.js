import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import ImageUploader from 'react-images-upload';


const Agregarproducto = () =>{
    const classes = useStyles();
    return(
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        Agregarproducto
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField
                        label="Nombre Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}/>
                        <TextField
                        label="Precio Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}/>
                        <TextField
                        label="Marca"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}/>
                        <TextField
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}/>
                        <TextField
                        label="Descripcion"
                        variant="outlined"
                        multiline
                        minRows={4}
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}/>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUploader 
                                withIcon={true}
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg', '.jpeg','.png',]}
                                maxFileSize={5242880}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar 
                                variant="square"
                                className={classes.AvatarProducto}/>
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary">
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};


export default Agregarproducto;