import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from '../../Theme/useStyles';
import { productoArray } from '../Data/DataPrueba';
import { useHistory } from 'react-router-dom';
import { getProductos } from '../../actions/ProductoAction';
import { Pagination } from '@material-ui/lab';

const Productos = (props) => {

    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ''
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    const handleChange = (event, value) => {
        setRequestProductos( (anterior) => ({
            ...anterior,
            pageIndex: value
        }));
    }


    useEffect(() =>{

        const getListaProductos = async () => {
            
            const response = await getProductos(requestProductos);
            console.log(response);
            setPaginadorProductos(response.data);
        }

        getListaProductos();

    }, [requestProductos]);



    const history = useHistory(); 
    const verProducto = (id) => {
        history.push("/Detalles/" + id);
    }
    const Array  = productoArray;

    const classes = useStyles();

    if (!paginadorProductos.data){
        return(null);
    }

    return(
        <Container className={classes.containermt}>
            <Typography variant ="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                {paginadorProductos.data.map(data =>(
                <Grid item lg={3} md={4} sm ={6} xs={12} key = {data.key}>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        image='https://th.bing.com/th/id/OIP.GQBZCwlkrBMLP0P0beQgZwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                        title = 'mi producto'>
                            <Avatar variant='square' className={classes.price}>
                            ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h6' className={classes.text_card}>
                            {data.nombre}
                            </Typography>
                            <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            onClick={() => verProducto(data.id)}>
                                Detalles
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange}/>
        </Container>
    )
};

export default Productos;