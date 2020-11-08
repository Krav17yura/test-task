import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Box, IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        margin: 10

    },
    media: {
        height: 200,
    },
    itemTotal: {
        margin: 0
    }
});

const ItemBlock = ({id, name, imageUrl, price, sale, description, handleAddToCart, addedCount = 0, totalPrice = 0, onMinusItem}) => {
    const classes = useStyles();

    const onAddItem = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            sale,
        };
        handleAddToCart(obj)
    };

    const handleMinusItem = () => {
        onMinusItem(id);
    };

    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {name}
                    </Typography>
                    <Grid container alignItems='flex-start' >
                        <Typography gutterBottom variant="h5" component="h2">
                            {price}$
                        </Typography>
                        {sale &&  <Typography variant="h6" color={"secondary"}>({sale})</Typography>}
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </Grid>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container alignItems='center' justify="center">
                    <IconButton aria-label={"add"} color={"primary"}   onClick={onAddItem} >
                        <AddCircleIcon fontSize='large'/>
                    </IconButton>
                    <Box>
                        <Typography variant="h5" >{addedCount}</Typography>
                    </Box>
                    <IconButton aria-label={"minus"} color={"secondary"}  onClick={handleMinusItem}>
                        <RemoveCircleIcon fontSize='large' />
                    </IconButton>
                </Grid>

                <Box>
                    <Typography variant="h5" >({totalPrice}$)</Typography>
                </Box>
            </CardActions>
        </Card>
    )
};

export default ItemBlock;
