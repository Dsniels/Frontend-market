import React, { useEffect, useState } from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import ImageUploader from 'react-images-upload';
import { actualizarProducto, getproducto } from '../../../actions/ProductoAction';
import {v4 as uuidv4} from 'uuid'

const Editarproducto = (props) => {
    const imagenDefault = "https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    const [producto, setProducto] = useState({
        nombre : '',
        descripcion : '',
        stock : 0,
        marcaId : 0,
        categoriaNombre : '',
        precio : 0.0,
        imagen : '',
        file : "",
        imagenTemporal : null
    });

    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");


    const handleCategoriaChange = (event) => {
         setCategoria(event.target.value);
    }

    const handleMarcaChange = (event) => {
        setMarca(event.target.value);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProducto( (prev) => ({
            ...prev,
            [name] : value
        }))
    }



    const subirImagen = (imagenes) => {
        let foto = imagenes[0];
        let fototemp = "";
        try{
            fototemp = URL.createObjectURL(foto);
        }catch(e){
            console.log(e);
        }

        setProducto((prev) =>({
            ...prev,
            file : foto,
            imagenTemporal : fototemp
        }))
    }


    useEffect( () => {
        const id = props.match.params.id;
        const getProductoAsync = async() =>{
            const response = await getproducto(id)
            setProducto(response.data);
            setCategoria(response.data.categoriaId);
            setMarca(response.data.marcaId);
        }
        getProductoAsync();
    }, [])

    const guardarProducto = async () =>{
        producto.categoriaNombre = categoria;
        producto.marcaId = marca;
        const id = props.match.params.id;


        const result = await actualizarProducto(id, producto);
        console.log(result);
        props.history.push("/admin/ListaProductos");
    }



    const keyImage = uuidv4();
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
                        value={producto.nombre}
                        onChange={handleChange}
                        name = "nombre"/>
                        <TextField
                        label="Precio Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={producto.precio}
                        onChange={handleChange}
                        name = "precio"/>
                        <TextField
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={producto.stock}
                        onChange={handleChange}
                        name = "stock"/>
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
                        value= {producto.descripcion}
                        name = "descripcion"
                        onChange={handleChange}/>
                        <FormControl className= {classes.FormControl}>
                            <InputLabel id = "marca-select-label">Marca</InputLabel>
                            <Select 
                            labelId="marca-select-label"
                            id="marca-select"
                            value={marca}
                            onChange={handleMarcaChange}
                            >
                                <MenuItem value= {1}>Nike</MenuItem>
                                <MenuItem value= {2}>Adidas</MenuItem>☻
                            </Select>
                        </FormControl>
                        <FormControl className= {classes.FormControl}>
                            <InputLabel id = "categoria-select-label">Categoria</InputLabel>
                            <Select 
                            labelId="categora-select-label"
                            id="categoria-select"
                            value={categoria}
                            onChange={handleCategoriaChange}
                            >
                                <MenuItem value= {1}>Deporte</MenuItem>
                                <MenuItem value= {2}>Casual</MenuItem>☻
                            </Select>
                        </FormControl>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUploader 
                                singleImage = {true}
                                key={keyImage}
                                withIcon={true}
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg', '.jpeg','.png',]}
                                maxFileSize={5242880}
                                onChange={subirImagen}/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar 
                                variant="square"
                                className={classes.AvatarProducto}
                                src={
                                    producto.imagenTemporal ? producto.imagenTemporal :
                                    (producto.imagen ? producto.imagen : imagenDefault)
                                    }/>
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary"
                        onClick={guardarProducto}>
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>


        </Container>
    );
};

export default Editarproducto;