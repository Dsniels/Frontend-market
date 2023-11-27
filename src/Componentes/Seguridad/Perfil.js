import React from 'react';
import useStyles from '../../Theme/useStyles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Avatar, Button, Container, Divider, Grid, TextField, Typography,Icon, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ImageUploader from 'react-images-upload';

const Perfil = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const verDetalles = () =>{
        const id = "151516516565";
        history.push("/ordenCompra/" + id);
    }   
    

    return(
        <Container className={classes.containermt}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <Typography variant='h5' className={classes.text_title}>
                        Perfil
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <ImageUploader withIcon={false} buttonStyles={{borderRadius: "50%", padding: 10, margin: 0,
                        position: "absolute", botton: 15, left:15 }}
                        className={classes.imageUploader}
                        buttonText={<Icon>add_a_photo</Icon>}
                        label ={<Avatar alt = "mi perfil" className={classes.avatarPerfil}
                        src=''></Avatar>}
                        imgExtension={['.jpg', '.png', '.jpeg']}
                        maxFileSize={5242880}/>
                        <TextField
                        label ="Nombre"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        value='Daniel' />
                        <TextField
                        label ="Apellido"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        value='Salazar' />
                        <TextField
                        label ="Email"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        value='daniel@gmail.com' />
                        <Divider className={classes.Divider}/>
                        <TextField
                        label ="password"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        />
                         <TextField
                        label ="confirm password"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        />
                        <Button variant='contained'
                        color='primary' >
                            Actualizar
                        </Button>

                    </form>
                </Grid>
                <Grid item md={9} xs={12}>
                    <Typography variant='h5' className={classes.text_title}>
                        Mis compras
                    </Typography>
                    <TableContainer className={classes.form}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Fecha</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Pagado</TableCell>
                                    <TableCell>Entregado</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell>151516516565</TableCell>
                                <TableCell>2023 - 11 - 27</TableCell>
                                <TableCell>$152</TableCell>
                                <TableCell>2023 - 11 - 2</TableCell>
                                <TableCell>
                                    <Icon className={classes.iconNotDelivered}>
                                        clear
                                    </Icon>
                                    <Icon className={classes.iconDelivered}>
                                        check
                                    </Icon>
                                </TableCell>
                                <TableCell >
                                    <Button variant='contained' onClick={verDetalles}> Detalles</Button>
                                </TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </Container>
    )
};

export default Perfil;