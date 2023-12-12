import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { productoArray } from "../../Data/DataPrueba";

const ListaProductos = () => {
    const productos = productoArray;
    const classes = useStyles();

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
                    className={classes.buttonAgregar}> 
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
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{productos.map((producto) => (
                        <TableRow key={producto.key}>
                            <TableCell>{producto.key}</TableCell>
                            <TableCell>{producto.titulo}</TableCell>
                            <TableCell>{producto.precio}</TableCell>
                            <TableCell>{producto.marca}</TableCell>
                            <TableCell>
                                <Button variant="contained"
                                color="primary">
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
        </Container>

    );
};

export default ListaProductos;