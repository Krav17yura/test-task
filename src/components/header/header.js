import React from 'react'
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Box} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {NavLink} from "react-router-dom";
import logoSvg from './fruits.svg'
import {useSelector} from "react-redux";


const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    },
    cartTotal: {
        marginTop: -10
    },
    root:{
        width: "100%"
    }
}))


const Header = () => {
    const {totalCount, totalPrice} = useSelector(({reCart}) => reCart)


    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid className={classes.typographyStyles}>
                    <NavLink to="/" style={{textDecoration: 'none', color: 'unset'}}>
                        <Grid container alignItems={"center"}>

                            <Box>
                                <img src={logoSvg} width="60" alt=''/>
                            </Box>

                            <Typography variant={'h5'}>
                                Fruit shop
                            </Typography>
                        </Grid>
                    </NavLink>

                </Grid>

                <Grid item container xs={5} direction={"column"} justify='center' alignItems="flex-end">
                    <NavLink to="/cart" style={{textDecoration: 'none', color: 'unset'}}>
                        <IconButton aria-label="shopping cart" color="inherit">
                            <ShoppingCartIcon/>
                            <Typography>
                                {totalCount}
                            </Typography>
                        </IconButton>
                    </NavLink>

                    <Typography className={classes.cartTotal}>
                        Total: {totalPrice}$
                    </Typography>
                </Grid>

            </Toolbar>
        </AppBar>

    )
};

export default Header;