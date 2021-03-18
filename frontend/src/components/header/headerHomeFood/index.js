import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

HeaderHomeFood.propTypes = {
    
};

function HeaderHomeFood(props) {
    const [TokenData, setTokenData] = useState();
    useEffect(() => {
        window.localStorage.getItem('token')?
        setTokenData(jwtDecode(window.localStorage.getItem('token')))
        : setTokenData('')
        return () => {
        }
    }, [])
    return (
        <div className="header">
            <div className="header__contact">
                <div className="header__contact__linkPage">
                    <div className="header__contact__item">Pages</div>
                    <div className="header__contact__item">Products</div>
                    <div className="header__contact__item">Blogs</div>
                </div>
                <div className="header__contact__call">
                    <span><i className="fas fa-phone-volume"></i></span>
                    <span> <span><img className='iconFlag' src="./assets/img/co.png" alt="" /></span>VN </span>
                    <span>(+84) 777 444 933</span>
                </div>
                <div className="header__contact__linkPage">
                    <div className="header__contact__item"><span><i className="fas fa-users-cog"></i></span>Admin</div>
                    {TokenData?
                        <Link to='/infor' className="header__contact__item"><span><i className="fas fa-user"></i></span>   {TokenData.userName}</Link>
                        :
                        <Link to='/login' className="header__contact__item"><span><i className="fas fa-user"></i></span>   Login</Link>
                    }
                </div>
            </div>
            <div className="header__inner">
                <div className="header__inner__containerLogo">
                    <div className="header__inner__containerLogo__contactLeft">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                    <Link to="/homeFood" className="header__inner__containerLogo__logo">
                        <img src="https://parkofideas.com/foodz/demo/wp-content/uploads-new/2019/04/demo3-2428546643.svg" alt="" />
                    </Link>
                    <div className="header__inner__containerLogo__contactRight">
                        <ul>
                            <li><i className="fas fa-search"></i></li>
                            <li><i className="fas fa-heart"></i></li>
                            <li><i className="fas fa-shopping-bag"></i></li>
                        </ul>
                    </div>
                </div>
                <ul className="header__inner__navBar">
                    <li>
                        <a href='/'>
                            <span className="header__containerIcon">
                                <span className="header__containerIcon__img">
                                    <i className="fas fa-pizza-slice"></i>
                                </span>
                                <span className="header__containerIcon__title">Pizza</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="header__containerIcon">
                                <span className="header__containerIcon__img">
                                    <i className="fas fa-hamburger"></i>
                                </span>
                                <span className="header__containerIcon__title">Burger</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="header__containerIcon">
                                <span className="header__containerIcon__img">
                                    <i className="fas fa-pizza-slice"></i>
                                </span>
                                <span className="header__containerIcon__title">Pizza</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="header__containerIcon">
                                <span className="header__containerIcon__img">
                                    <i className="fas fa-pizza-slice"></i>
                                </span>
                                <span className="header__containerIcon__title">Pizza</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="header__containerIcon">
                                <span className="header__containerIcon__img">
                                    <i className="fas fa-pizza-slice"></i>
                                </span>
                                <span className="header__containerIcon__title">Pizza</span>
                            </span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

    );
}

export default HeaderHomeFood;