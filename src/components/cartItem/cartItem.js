import React from 'react'
import {Box, Grid, IconButton, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({

    cartAvatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),

    },
    cartItem:{
        marginTop: 20
    },
    itemName: {
    }

}));

const CartItem = ({id, name, imageUrl, onRemoveItem, onPlusItem, onMinusItem, totalCount, totalPrice}) => {
    const classes = useStyles();
    const handleRemoveClick = () => {
        onRemoveItem(id);
    };

    const handlePlusItem = () => {
        onPlusItem(id);
    };

    const handleMinusItem = () => {
        onMinusItem(id);
    };

    return (
        <Grid container className={classes.cartItem} justify={'center'} alignItems='center'>
            <Grid item  lg={1}>
                <Avatar alt="Remy Sharp" src={imageUrl}
                        className={classes.cartAvatar}/>
            </Grid>
            <Grid item xs={2} lg={1}>
                <Box>
                    <Typography variant="h5" className={classes.itemName}>{name}</Typography>
                </Box>
            </Grid>
            <Grid item container xs={5} lg={2} alignItems={'center'} justify={"center"}>
                <IconButton aria-label={"add"} color={"primary"} onClick={handlePlusItem}>
                    <AddCircleIcon/>
                </IconButton>
                <Box>
                    <Typography variant="h5">{totalCount}</Typography>
                </Box>
                <IconButton aria-label={"minus"} color={"secondary"} onClick={handleMinusItem}>
                    <RemoveCircleIcon/>
                </IconButton>
            </Grid>

            <Grid item xs={1} container alignItems={"center"} justify={"center"}>
                <Box>
                    <Typography variant="h5">{totalPrice}$</Typography>
                </Box>
            </Grid>

            <Grid item xs={1} >
                <IconButton aria-label="delete" onClick={handleRemoveClick}>
                    <DeleteIcon/>
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default CartItem;