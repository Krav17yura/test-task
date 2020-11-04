import React from 'react'
import './header.css'
import {Link} from "react-router-dom";
import logoSvg from './fruits.svg'
import cartIcon from './cart.svg'
import {useSelector} from "react-redux";

const Header = () => {
    const totalCount = useSelector((state) => state.reCart.totalCount)
    const totalPrice = useSelector((state) => state.reCart.totalPrice)
    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                <div className="header__logo">
                        <img className='header__img' width="100" src={logoSvg} alt="Pizza logo"/>
                        <div>
                            <h1 className='header__title'>Fruit shop</h1>
                            <p className='header__subtitle'>Самые свежие фрукты во вселенной</p>
                        </div>
                </div>
                </Link>
                <div className="header__cart">
                    <Link to='/cart'>
                        <img width='50' src={cartIcon} alt=""/>
                    </Link>
                    <div className="cart__info">
                        <ul>
                            <li>Количество кг: {totalCount}</li>
                            <li>Сумма заказа:  {totalPrice}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;