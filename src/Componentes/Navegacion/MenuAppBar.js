import { AppBar, Container, Icon, Toolbar, Typography, Link, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React, { useState } from 'react';
import useStyles from '../../Theme/useStyles';

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
                                        <ListItem button onClick={closeToggle} className={classes.listItem}>
                                            <Link color ="inherit" className={classes.LinkBarmobile} underline='none'>
                                                <ListItemIcon className={classes.listItemIcon}>
                                                    <Icon>person</Icon>
                                                </ListItemIcon>
                                                <ListItemText>Login</ListItemText>
                                            </Link>
                                        </ListItem>
                                    </List>
                                </div>
                                
                            </Drawer>
                            <div className={classes.grow}>
                                <Link color ="inherit" className={classes.LinkBarLogo} underline ="none">
                                    <Icon className={classes.mr} fontSize="large">store</Icon>
                                    <Typography variant='h5'>Shop</Typography>
                                </Link>
                            </div>
                            <div className={classes.sectionDesktop}>
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