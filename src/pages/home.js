import React, {Fragment, useEffect} from 'react'
import ItemBlock from "../components/itemBlock/itemBlock";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../redux/actions/acItem";
import Loader from "../components/loading/loading";
import {minusCartItem} from "../redux/actions/acCart";
import {Grid} from "@material-ui/core";


const Home = React.memo( function Home() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.reItems.items);
    const isLoad = useSelector((state) => state.reItems.itemStatus.load)
    const {cartItems} = useSelector(({reCart}) => reCart)


    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    const handleAddToCart = (obj) => {
        dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: obj,
        });
    };

    const addItemToCart = (obj) => {
        dispatch(addItemToCart(obj))
    }

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    return (
        <Grid container direction={"row"}   justify="space-around" alignItems="center" >
            {isLoad ? <Fragment>
                {items && items.map(obj => (
                    <ItemBlock
                        handleAddToCart={handleAddToCart}
                        key={obj.name}
                        {...obj}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].totalCount}
                        totalPrice={cartItems[obj.id] && cartItems[obj.id].totalPrice}
                        onMinusItem={onMinusItem}
                        addItemToCart={addItemToCart}
                    />
                ))
                }
            </Fragment> : <Loader/>}
        </Grid>


     /*   <div className="content__item">
            {isLoad ? <Fragment>
                {items && items.map(obj => (
                    <ItemBlock
                        handleAddToCart={handleAddToCart}
                        key={obj.name}
                        {...obj}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].totalCount}
                         totalPrice={cartItems[obj.id] && cartItems[obj.id].totalPrice}
                        onMinusItem={onMinusItem}
                        addItemToCart={addItemToCart}
                    />
                ))
                }
            </Fragment> : <Loader/>}
        </div>*/
    )
});

export default Home;