import React from "react";
import useStyles from "../../../Theme/useStyles";
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

const ListaPedidos = () => {

    const classes = useStyles();

    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Pedidos
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>usuario</TableCell>
                            <TableCell>fecha</TableCell>
                            <TableCell>total</TableCell>
                            <TableCell>pagado</TableCell>
                            <TableCell>entregado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>213214141</TableCell>
                            <TableCell>Daniel Salazar</TableCell>
                            <TableCell>12-12-2023</TableCell>
                            <TableCell>$90</TableCell>
                            <TableCell>11-12-2023</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>check</Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="inherit">
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>i78878497328</TableCell>
                            <TableCell>Diego Salazar</TableCell>
                            <TableCell>10-12-2023</TableCell>
                            <TableCell>$120</TableCell>
                            <TableCell>8-12-2023</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>clear</Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="inherit">
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
};

export default ListaPedidos;