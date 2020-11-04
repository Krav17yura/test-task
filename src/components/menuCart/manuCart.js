import React from 'react'
import './manuCart.css'
import CartItem from "../cartItem";
import {useSelector, useDispatch} from "react-redux";
import {removeCartItem, plusCartItem, minusCartItem} from "../../redux/actions/acCart";

const MenuCart = () => {
    const {totalPrice, totalCount, cartItems} = useSelector(({reCart}) => reCart)
    const dispatch = useDispatch();
    const itemsGroup = Object.keys(cartItems).map((key) => {
        return cartItems[key].items[0]
    })

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            dispatch(removeCartItem(id));
        }
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    return(
        <div className='content__cart'>
            {itemsGroup && <div className="cart-block">
               <h4 className='cart-block__title'>Cart</h4>
                {
                    itemsGroup.map(obj => <CartItem
                        {...obj}
                        key={obj.name}
                        totalPrice={cartItems[obj.id].totalPrice}
                        totalCount={cartItems[obj.id].items.length}
                        onRemoveItem={onRemoveItem}
                        onPlusItem={onPlusItem}
                        onMinusItem={onMinusItem}/> )
                }

                <div className="cart-block__footer">
                    <div className="cart-block__footer-totalCount footer_text">
                        Всего кг фруктов: {totalCount}.
                    </div>
                    <div className="cart-block__footer-totalPrice footer_text">
                        Сумма заказа: {totalPrice}$
                    </div>
                </div>
            </div> }
        </div>
    )
};

export default MenuCart;