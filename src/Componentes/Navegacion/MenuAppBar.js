import { AppBar, Container, Icon, Toolbar, Typography, IconButton, Drawer, List} from '@material-ui/core'
import React, { useState } from 'react';
import useStyles from '../../Theme/useStyles';
import { Link } from 'react-router-dom';
import MenuCliente from './Desktop/MenuCliente';
import MenuAdmin from './Desktop/MenuAdmin';
import MenuMobile from './Mobile/MenuMobile';
import MenuMobilePublic from './Mobile/MenuMobilePublic';
import MenuPublic from './Desktop/MenuPublic';





const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const openToggle =() => {
        setOpen(true);
    }
    const closeToggle =() => {
        setOpen(false);
    }

    
    return (
        <div>
            <AppBar position ="static" className={classes.Appbar}>
                    <Container>
                        <Toolbar> 
                            <div className={classes.sectionMobile}>
                                <IconButton color ="inherit" onClick={openToggle}>
                                    <Icon fontSize = "large">menu</Icon>
                                </IconButton>
                            </div>
                            <Drawer open={open}
                            onClose={closeToggle}>
                                <div className={classes.list}>
                                    <List>
                                       {/*  <MenuMobilePublic clickHandler={closeToggle}></MenuMobilePublic> */}
                                        <MenuMobile clickHandler={closeToggle}/>
                                    </List>
                                </div>
                                
                            </Drawer>
                            <div className={classes.grow}>
                                <Link to="/" color ="inherit" className={classes.LinkBarLogo} underline ="none">
                                    <Icon className={classes.mr} fontSize="large">store</Icon>
                                    <Typography variant='h5'>Shop</Typography>
                                </Link>
                            </div>
                            <div className={classes.sectionDesktop}>
                                {/* <MenuPublic/> */}
                                <MenuCliente/>
                                <MenuAdmin/>
                            </div>
                        </Toolbar>
                    </Container>
            </AppBar>
        </div>
    )
};

export default MenuAppBar;
