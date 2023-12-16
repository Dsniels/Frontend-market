import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import ImageUploader from 'react-images-upload';


const Editarproducto = () => {
    const classes = useStyles();

    return(
        <Container className={classes.containermt}>
            <Grid Container justify="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>Editarproducto</Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField
                        label="Nombre Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value="playera futbol"/>
                        <TextField
                        label="Precio Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={9.99}/>
                        <TextField
                        label="Marca"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value="adidas"/>
                        <TextField
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={15}/>
                        <TextField
                        label="Descripcion"
                        variant="outlined"
                        multiline
                        minRows={4}
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value="Playera de futbol con tela transpirable naklndjkajbdibw b dcnskldnkdcn"/>
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
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>


        </Container>
    );
};

export default Editarproducto;