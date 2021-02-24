import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.scss';
import imgApis from '../../../container/imgApi/imgApi';
import Footer from '../../../components/footer';
import HeaderMin from '../../../components/header/header_min';
class HomeFood extends Component {
    menuTogger; body; sr;
    constructor(props) {
        super(props);

    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        this.menuTogger = document.getElementsByClassName('menu-toggle')[0];
        this.body = document.getElementsByClassName('body')[0];
        document.documentElement.scrollTop = 0;
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {

        // if(window.scrollY==0){
        //     // console.log("top");
        //     document.getElementsByClassName("home__header")[0].setAttribute("class","home__header home__block");
        // }
        // else{
        //     // console.log("bot");
        //     document.getElementsByClassName("home__header")[0].setAttribute("class","home__header home__fixed");
        // }
    }
    selectElement = (element) => {
        return document.querySelector(element);
    }

    clickToggle = () => {
        this.body.classList.toggle('open');
        console.log(this.body)
    }
    render() {
        return (
            <div className="body">
                <HeaderMin />
                <section className="hero" id="hero">
                    <div className="containerS">
                        <h2 className="sub-headline">
                            <span className="first-letter">W</span>elecome
                        </h2>
                        <h1 className="headline">Food <span>Z</span></h1>
                        <div className="headline-description">
                            <div className="separator">
                                <div className="line line-left"></div>
                                <div className="asterisk"><i className="fas fa-asterisk"></i> </div>
                                <div className="line line-right"></div>
                            </div>
                            <div className="single-animation">
                                <h5>Ready to be opended</h5>
                                <Link to='/ShopFood' className="btn cta-btn">Explore</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end-hero */}

                <section className="discover-our-story">
                    <div className="container">
                        <div className="restaurant-info">
                            <div className="restaurant-description padding-right animate-left">
                                <div className="global-headline">
                                    <h2 className="sub-headline">
                                        <span className="first-letter">D</span>iscover
                                    </h2>
                                    <h1 className="headline headline-dark">Our Story</h1>
                                    <div className="asterisk"><i className="fas fa-asterisk"></i> </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime aliquam aut optio tempora cupiditate laboriosam, sit debitis iusto eaque error dolorum magnam earum quam necessitatibus! Quo vel quis libero?
                                </p>
                                <a className="btn body-btn">About us</a>
                            </div>
                        </div>
                        <div className="restaurant-info-img animate-right">
                            <img className='ImgBgHome' src={imgApis.img6} alt="" />
                        </div>
                    </div>
                </section>

                {/* end discover */}
                <section className="tasteful-recipes between">
                    <div className="container">
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">T</span>asteful
                                </h2>
                            </div>
                            <div className="animate-bottom">
                                <h1 className="headline ">Recipes</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end tastefull */}
                <section className="discover-our-menu">
                    <div className="container">
                        <div className="restaurant-info">
                            <div className="image-group padding-right animate-left">
                                <img className='ImgBgHome' src={imgApis.img1} alt="" />
                                <img className='ImgBgHome' src={imgApis.img2} alt="" />
                                <img className='ImgBgHome' src={imgApis.img3} alt="" />
                                <img className='ImgBgHome' src={imgApis.img4} alt="" />
                            </div>
                            <div className="restaurant-description animate-right">
                                <div className="global-headline">
                                    <h2 className="sub-headline">
                                        <span className="first-letter">D</span>iscover
                                    </h2>
                                    <h1 className="headline headline-dark">Menu</h1>
                                    <div className="asterisk"><i className="fas fa-asterisk"></i> </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam vel at libero, omnis sed veritatis ex obcaecati officia ipsum nostrum rem id. Ab nostrum ad fugit, eos recusandae quibusdam?</p>
                                    <a className="btn body-btn">View the full menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* discover-our meunu end */}
                <section className="perfect-blend between">
                    <div className="container">
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">T</span>he perfect
                                </h2>
                            </div>
                            <div className="animate-bottom">
                                <h1 className="headline ">Blend</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* perfect blend end */}

                <section className="culinary-delight">
                    <div className="container">
                        <div className="restaurant-info">
                            <div className="restaurant-description padding-right animate-left">
                                <div className="global-headline">
                                    <h2 className="sub-headline">
                                        <span className="first-letter">C</span>ulinary
                                    </h2>
                                    <h1 className="headline headline-dark">Delight</h1>
                                    <div className="asterisk"><i className="fas fa-asterisk"></i> </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime aliquam aut optio tempora cupiditate laboriosam, sit debitis iusto eaque error dolorum magnam earum quam necessitatibus! Quo vel quis libero?
                                </p>
                                <a className="btn body-btn">Make reservation</a>
                            </div>
                        </div>
                        <div className="image-group">
                            <img className="animate-top ImgBgHome" src={imgApis.img7} alt="" />
                            <img className="animate-bottom ImgBgHome" src={imgApis.img8} alt="" />
                        </div>
                    </div>
                </section>
                {/* culinary end  */}
                <Footer />
            </div>

        )
    }

}

export default HomeFood;

