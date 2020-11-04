import React, {Fragment} from 'react'
import './cartItem.css'
import minusIcon from './minus-svgrepo-com.svg'
import plusIcon from './plus-svgrepo-com.svg'
import deleteIcon from './trash.svg'

const CartItem = ({id, name, imageUrl, totalPrice, totalCount, onRemoveItem, onPlusItem, onMinusItem}) => {

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
        <Fragment>
            <div className="cart__item">
                <div className="cart__Item-img">
                    <img className='cartImg' src={imageUrl}
                         alt="Item"/>
                </div>
                <div className="cart__item-info">
                    <h3>{name}</h3>
                </div>
                <div className="cart__item-count">
                    <button className="cart__item-count-minus" onClick={handleMinusItem}>
                        <img src={minusIcon} alt="" width='20'/>
                    </button>
                    <div className="cart-item-count" > {totalCount} </div>
                    <button className="cart__item-count-plus" onClick={handlePlusItem}>
                        <img src={plusIcon} alt="" width='20'/>
                    </button>
                </div>
                <div className="cart__item-price">
                    <b>{totalPrice} $</b>
                </div>
                <button className="cart__item-remove" onClick={handleRemoveClick}>
                    <img src={deleteIcon} alt="" width='20'/>
                </button>
            </div>
        </Fragment>
    )
};

export default CartItem;