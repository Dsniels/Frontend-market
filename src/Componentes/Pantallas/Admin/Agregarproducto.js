import React, { useState } from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import ImageUploader from 'react-images-upload';


const Agregarproducto = () =>{
    
    const [categoria, setCategoria] = useState("");

    const [marca, setMarca] = useState("");

    const handlerCategoriaChange = (event) =>{
        setCategoria(event.target.value);
    }
    const handlerMarcaChange = (event) =>{
        setMarca(event.target.value);
    }



    const classes = useStyles();
    return(
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        Agregar producto
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
                        <FormControl className={classes.FormControl}>
                            <InputLabel id="marca-select-label">Marca</InputLabel>
                            <Select
                            laberID = "marca-select-label"
                            id="marca-select"
                            value={marca}
                            onChange = {handlerMarcaChange}>
                                <MenuItem value={1}>Nike</MenuItem>
                                <MenuItem value={2}>Adidas</MenuItem>
                            </Select>

                        </FormControl>
                        <FormControl className={classes.FormControl}>
                            <InputLabel id="categoria-select-label">Categoria</InputLabel>
                            <Select
                            laberID = "categoria-select-label"
                            id="categoria-select"
                            value={categoria}
                            onChange = {handlerCategoriaChange}>
                                <MenuItem value={1}>vernao</MenuItem>
                                <MenuItem value={2}>Invierno</MenuItem>
                            </Select>

                        </FormControl>
                            

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