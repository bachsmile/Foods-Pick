import React, {Component} from 'react';
import './../../Style/HeaderHomeFood.scss'
class HeaderHomeFood extends Component{
    render(){
        return(
            <div className="header">
                <div className= "header__contact">
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
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