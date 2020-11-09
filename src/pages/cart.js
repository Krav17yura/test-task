import React, {Fragment} from 'react'
import {Box, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CartItem from "../components/cartItem";
import {useDispatch, useSelector} from "react-redux";
import {minusCartItem, plusCartItem, removeCartItem} from "../redux/actions/acCart";
import cartEmpty from './cartEmpty.svg'
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(() => ({

    cartTitle: {
        margin: "40px 0 0 0 "
    },

}));

const Cart = () => {
    const dispatch = useDispatch();
    const {totalPrice, totalCount, cartItems} = useSelector(({reCart}) => reCart)
    const itemsGroup = Object.keys(cartItems).map((key) => {
        return cartItems[key].items[0]
    })

    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    }


    const classes = useStyles();
    return (
        <Grid item xs={12} lg={9} container direction="column" alignItems="center" justify='center'>
            {totalCount ? <Fragment>
                    <Grid item xs={3}>
                        <Box>
                            <Typography variant='h5' className={classes.cartTitle}>
                                Корзина
                            </Typography>
                        </Box>
                    </Grid>
                    {
                        itemsGroup.map(obj => <CartItem
                            {...obj}
                            key={obj.name}
                            totalCount={cartItems[obj.id].totalCount}
                            totalPrice={cartItems[obj.id].totalPrice}
                            onRemoveItem={onRemoveItem}
                            onPlusItem={onPlusItem}
                            onMinusItem={onMinusItem}
                        />)
                    }
                    <Grid item xs={12} container justify={"space-around"} alignItems={"center"}>
                        <Typography variant='h5' className={classes.cartTitle}>
                            Всего кг фруктов: {totalCount}.
                        </Typography>

                        <Typography variant='h5' className={classes.cartTitle}>
                            Сумма заказа:{totalPrice}$
                        </Typography>
                    </Grid>

                </Fragment> :
                <Grid container direction='column' alignItems="center" justify="center">
                    <Typography variant='h5' className={classes.cartTitle}>
                        Корзина пустая
                    </Typography>
                    <img src={cartEmpty} width={300} alt=""/>
                    <NavLink to="/" style={{textDecoration: 'none', color: 'unset'}}>
                        <Button variant='contained' color="primary">
                            Вернуться к покупкам
                        </Button>
                    </NavLink>
                </Grid>
            }
        </Grid>

    )
};

export default Cart;