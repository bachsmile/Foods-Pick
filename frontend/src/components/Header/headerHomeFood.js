import React, {Component} from 'react';
import './../../components/header/headerHomeFood.scss'
class HeaderHomeFood extends Component{
    render(){
        return(
            <div className="header">
                <div className= "header__contact">
                    <div className="header__contact__linkPage">
                        <div className="header__contact__item">Pages</div>
                        <div className="header__contact__item">Products</div>
                        <div className="header__contact__item">Blogs</div>
                    </div>
                    <div className="header__contact__call">
                        <span><i class="fas fa-phone-volume"></i></span>
                        <span> <span><img className='iconFlag' src="./assets/img/co.png" alt=""/></span>VN </span>
                        <span>(+84) 777 444 933</span>
                    </div>
                    <div className="header__contact__linkPage">
                        <div className="header__contact__item"><span><i class="fas fa-users-cog"></i></span>Admin</div>
                        <div className="header__contact__item"><span><i class="fas fa-user"></i></span>   Login</div>
                    </div>
                </div>
                <div className="header__inner">
                    <div className="header__inner__containerLogo">
                        <div className="header__inner__containerLogo__contactLeft">
                            <ul>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                            </ul>
                        </div>
                        <span className="header__inner__containerLogo__logo">
                            <img src="https://parkofideas.com/foodz/demo/wp-content/uploads-new/2019/04/demo3-2428546643.svg" alt=""/>
                        </span>
                        <div className="header__inner__containerLogo__contactRight">
                            <ul>
                                <li><i class="fas fa-search"></i></li>
                                <li><i class="fas fa-heart"></i></li>
                                <li><i class="fas fa-shopping-bag"></i></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="header__inner__navBar">
                         <li>
                            <a>
                                <span className= "header__containerIcon">
                                    <span className="header__containerIcon__img">
                                        <i class="fas fa-pizza-slice"></i>
                                    </span>
                                    <span className="header__containerIcon__title">Pizza</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className= "header__containerIcon">
                                    <span className="header__containerIcon__img">
                                         <i class="fas fa-hamburger"></i>
                                    </span>
                                    <span className="header__containerIcon__title">Burger</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className= "header__containerIcon">
                                    <span className="header__containerIcon__img">
                                        <i class="fas fa-pizza-slice"></i>
                                    </span>
                                    <span className="header__containerIcon__title">Pizza</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className= "header__containerIcon">
                                    <span className="header__containerIcon__img">
                                        <i class="fas fa-pizza-slice"></i>
                                    </span>
                                    <span className="header__containerIcon__title">Pizza</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className= "header__containerIcon">
                                    <span className="header__containerIcon__img">
                                        <i class="fas fa-pizza-slice"></i>
                                    </span>
                                    <span className="header__containerIcon__title">Pizza</span>
                                </span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
export default HeaderHomeFood