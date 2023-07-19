import { AppBar, Container, Icon, Toolbar, Typography, Link, Button } from '@material-ui/core'
import React from 'react';
import useStyles from '../../Theme/useStyles';

const MenuAppBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position ="static" className={classes.Appbar}>
                    <Container>
                        <Toolbar> 
                            <div className={classes.grow}>
                                <Link color ="inherit" className={classes.LinkBarLogo} underline ="none">
                                    <Icon className={classes.mr} fontSize="large">store</Icon>
                                    <Typography variant='h5'>Shop</Typography>
                                </Link>
                            </div>
                            <div>
                                <Button color ="inherit" className={classes.ButtonIcon}>
                                    <Link color = "inherit" className={classes.linkBarDesktop} underline='none'>
                                        <Icon className={classes.mr}>person</Icon>
                                        Login
                                    </Link>
                                </Button>
                            </div>
                        </Toolbar>
                    </Container>
            </AppBar>
        </div>
    )
};

export default MenuAppBar;