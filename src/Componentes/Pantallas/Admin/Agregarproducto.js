import React, { useState } from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import ImageUploader from 'react-images-upload';
import { registrarproducto } from "../../../actions/ProductoAction";
import { v4 as uuidv4 } from "uuid";


const Agregarproducto = () =>{
    const imagenDefault = "https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    const [producto, setProducto] = useState({
        id: 0,
        nombre: '',
        descripcion: '',
        stock: 0,
        marcaId: 0,
        categoriaId: 0,
        precio: 0.0,
        imagen: '',
        file: '',
        imagenTemporal : ""
    });   
    const [categoria, setCategoria] = useState("");

    const [marca, setMarca] = useState("");

    const handlerCategoriaChange = (event) =>{
        setCategoria(event.target.value);
    }
    const handlerMarcaChange = (event) =>{
        setMarca(event.target.value);
    }

    const guardarProducto = async () =>{

        producto.categoriaId = categoria;
        producto.marcaId = marca;
        const result = await registrarproducto(producto);
        console.log('resultado', result);
    }

    const handlerChange = (e) =>{
        const {name, value} = e.target;

        setProducto(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const subirImagen = imagenes =>{
        let imagen = imagenes[0];
        let fototemp = "";
        try{
            fototemp = URL.createObjectURL(imagen)
        }catch(e){
            console.log(e);

        }
        setProducto(prev => ({
            ...prev,
            file: imagen,
            imagenTemporal : fototemp
        }))
    }



    const classes = useStyles();
    const keyImage = uuidv4();


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
                            shrink: true,
                        }}
                        name ="nombre"
                        value={producto.nombre}
                        onChange={handlerChange}
                        />
                        <TextField
                        label="Precio Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name ="precio"
                        value={producto.precio}
                        onChange={handlerChange}
                        />
                        
                        <TextField
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name ="stock"
                        value={producto.stock}
                        onChange={handlerChange}/>
                        <TextField
                        label="Descripcion"
                        variant="outlined"
                        multiline
                        minRows={4}
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name ="descripcion"
                        value={producto.descripcion}
                        onChange={handlerChange}/>
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
                                singleImage = {true}
                                key={keyImage}
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg', '.jpeg','.png',]}
                                maxFileSize={5242880}
                                onChange={subirImagen}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar 
                                variant="square"
                                className={classes.AvatarProducto}
                                src = {
                                    producto.imagenTemporal ? producto.imagenTemporal : imagenDefault
                                }/>
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" onClick={guardarProducto}>
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};


export default Agregarproducto;