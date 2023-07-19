import { AppBar, Container, Icon, Toolbar, Typography, Link } from '@material-ui/core'
import React from 'react';

const MenuAppBar = () => {
    return (
        <div>
            <AppBar position ="static">
                    <Container>
                        <Toolbar> 
                            <div>
                                <Link color ="inherit" underline ="none">
                                    <Icon fontSize="large">store</Icon>
                                    <Typography variant='h5'>Shop</Typography>
                                </Link>
                            </div>
                            <div>

                            </div>
                        </Toolbar>
                    </Container>
            </AppBar>
        </div>
    )
};

export default MenuAppBar;