import React, {Fragment} from 'react';
import './itemBlock.css'

const ItemBlock = ({id, name, imageUrl, price, sale, handleAddToCart, addedCount = 0, totalPrice = 0, onMinusItem}) => {

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
        <Fragment>
            <div className="item-block">
                <img
                    className="item-block__image"
                    src={imageUrl}
                    width="100"
                    alt=""/>
                <div className="item-block__count" >В корзине:{addedCount}кг</div>
                <div className='item-block__total-price'>Общая сумма:{totalPrice}$</div>
                <h4 className="item-block__title">{name}</h4>
                {sale && <div  className="item-block__sale">{sale}</div>}
                <div className="item-block__price">{price}$</div>
                <div className="item-block__footer">

                    <button
                        className='item-block__button'
                        onClick={onAddItem}
                    >
                        Добавить
                    </button>
                    <button
                        className='item-block__button'
                        onClick={handleMinusItem}
                    >
                        Удалить
                    </button>

                </div>

            </div>
        </Fragment>
    )
};

export default ItemBlock;
