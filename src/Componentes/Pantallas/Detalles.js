import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from '../../Theme/useStyles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getproducto } from '../../actions/ProductoAction';
import { addItem } from '../../actions/CarritoAction';
import { useStateValue } from '../../contexto/store';
import { useParams } from 'react-router-dom';

const Detalles = (props) => {
    
    const [cantidad, setCantidad] = useState(1);
    const [{sesionCarrito}, dispatch] = useStateValue();

    const [productoSeleccionado, setProductoSeleccionado] = useState({
        
        id: 0,
        nombre: "",
        descripcion: "",
        stock: 0,
        marcaId: 0,
        marcaNombre: "",
        categoriaId: 0,
        categoriaNombre: "",
        precio: 0.0,
        imagen:""

    });

    useEffect(()=>{
        const id = props.match.params.id;
        const getProductoAsync = async() =>{
            const response =  await getproducto(id);
            setProductoSeleccionado(response.data)
        }
        getProductoAsync();
        
    }, [setProductoSeleccionado]);


    const classes = useStyles();
    const history = useHistory();

    const agregarCarrito = async () => {
        const item = {
            id: productoSeleccionado.id,
            producto: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: cantidad,
            imagen: productoSeleccionado.imagen,
            marca : productoSeleccionado.marcaNombre,
            categoria : productoSeleccionado.categoriaNombre
        };

        await addItem(sesionCarrito, item, dispatch);
 
        history.push("/carrito");
    }


    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                {productoSeleccionado.nombre}
            </Typography>
            <Grid container spacing={4}>
                    <Grid item lg={8} md={8} xs={12}>
                        <Paper className={classes.PaperImg} variant ="outlined" square>
                            <CardMedia 
                            className={classes.mediaDetail}
                            image='https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                            title={productoSeleccionado.descripcion}
                            ></CardMedia>
                        </Paper>
                    </Grid>
                
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>  
                                    <TableCell>
                                        <Typography variant='subtitle2'>precio</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='subtitle2'>{productoSeleccionado.precio}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>  
                                    <TableCell>
                                        <Typography variant='subtitle2'>Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                    <TextField
                                        id = "Cantidad"
                                        label=""
                                        type='number'
                                        value={cantidad}
                                        onChange={event => setCantidad(event.target.value)}
                                        defaultValue={1}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        />
                                           
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button variant ="contained"
                                        color="primary"
                                        size="large"
                                        onClick={agregarCarrito}>
                                            Agregar al Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_details}>Precio: {productoSeleccionado.precio}</Typography>
                            <Typography className={classes.text_details}>unidades: {productoSeleccionado.stock}</Typography>
                            <Typography className={classes.text_details}>marca: {productoSeleccionado.marcaNombre}</Typography>
                            <Typography className={classes.text_details}>Tipo: {productoSeleccionado.categoriaNombre}</Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography className={classes.text_details}>Descripcion: {productoSeleccionado.descripcion}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Detalles;