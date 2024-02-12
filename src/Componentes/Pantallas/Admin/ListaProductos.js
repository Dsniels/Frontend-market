import React, { useEffect, useState } from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { getProductos } from "../../../actions/ProductoAction";
import { Pagination } from "@material-ui/lab";

const ListaProductos = (props) => {
    const [requestProductos, setRequestProductos] = useState({
        pageIndex : 1,
        pageSize: 20,
        search : ''
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count : 0,
        pageIndex : 1,
        pageSize : 0,
        pageCount : 0,
        data : []
    });

    const handleChange = (event, value) => {
        setRequestProductos((anterior) => ({
            ...anterior,
            pageIndex : value
        }));
    }


    useEffect( () => {
        const getListaProductos = async () =>{
            const response = await getProductos(requestProductos)
            setPaginadorProductos(response.data)
        }
        getListaProductos();
    }, [requestProductos])


    const classes = useStyles();

    const editaproducto = (id) => {
        props.history.push("/admin/editarproductos/" + id)        
    }
    
    const agregarproducto = () =>{
        props.history.push("/admin/agregarProductos");
    }
    return(
        <Container className={classes.containermt}>
            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        Productos
                    </Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Button variant="contained" 
                    color="inherit" 
                    className={classes.buttonAgregar}
                    onClick={agregarproducto}> 
                    <Icon>add</Icon>
                    Agregar producto
                    </Button>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOMBRE</TableCell>
                            <TableCell>PRECIO</TableCell>
                            <TableCell>MARCA</TableCell>
                            <TableCell>CATEGORIA</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{paginadorProductos.data.map((producto) => (
                        <TableRow key={producto.id}>
                            <TableCell>{producto.id}</TableCell>
                            <TableCell>{producto.nombre}</TableCell>
                            <TableCell>{producto.precio}</TableCell>
                            <TableCell>{producto.marcaNombre}</TableCell>
                            <TableCell>{producto.categoriaNombre}</TableCell>
                            <TableCell>
                                <Button variant="contained"
                                color="primary"
                                onClick={() => editaproducto(producto.id)}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant="contained"
                                color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}</TableBody>
                </Table>

            </TableContainer>

            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange}></Pagination>
        </Container>

    );
};

export default ListaProductos;