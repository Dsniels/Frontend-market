import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

const Usuarios = (props) => {
    const classes = useStyles();


    const editarUsuario = () => {
        const id = "dnandknasknduw";
        props.history.push("/admin/Usuarios/" + id);
    }

    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Usuarios
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell>vacio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>312343212</TableCell>
                            <TableCell>Daniel</TableCell>
                            <TableCell>Dans@gmail.com</TableCell>
                            <TableCell><Icon className={classes.iconDelivered}>check</Icon></TableCell>
                            <TableCell>
                                <Button variant="contained" 
                                color="primary"
                                onClick={editarUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant="contained" color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                                </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>312dasdsa</TableCell>
                            <TableCell>Diego</TableCell>
                            <TableCell>Diego@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>clear</Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" 
                                color="primary"
                                onClick={editarUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant="contained" color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                                </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    );
};

export default Usuarios;