import React, {Fragment} from 'react';
import './itemBlock.css'

const ItemBlock = ({id, name, imageUrl, price, sale, handleAddToCart}) => {

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

    return (
        <Fragment>
            <div className="item-block">
                <img
                    className="item-block__image"
                    src={imageUrl}
                    width="100"
                    alt=""/>
                <h4 className="item-block__title">{name}</h4>
                {sale && <div  className="item-block__sale">{sale}</div>}
                <div className="item-block__footer">
                    <div className="item-block__price">{price}$</div>
                    <button
                        className='item-block__button'
                        onClick={onAddItem}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        </Fragment>
    )
};

export default ItemBlock;
