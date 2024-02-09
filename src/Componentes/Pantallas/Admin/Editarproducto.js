import React, { useEffect, useState } from "react";
import useStyles from "../../../Theme/useStyles";
import { Avatar, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import ImageUploader from 'react-images-upload';
import { getproducto } from '../../../actions/ProductoAction';


const Editarproducto = (props) => {

    const [producto, setProducto] = useState({
        nombre : '',
        descripcion : '',
        stock : 0,
        marcaId : 0,
        categoriaId : 0,
        precio : 0.0,
        imagen : '',
        file : ""
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
        const foto = imagenes[0];
        setProducto((prev) =>({
            ...prev,
            file : foto
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