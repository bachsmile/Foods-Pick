import React, { Component } from 'react';
import './style.scss'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="back-to-top">
                        <a href="#hero" ><i className="fas fa-chevron-up"></i></a>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-about animate-up">
                            <h4>About XB Food</h4>
                            <div className="asterisk"><i className="fas fa-asterisk"></i> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos dolores sunt. Quod delectus reiciendis voluptatem ducimus veniam! Ea enim totam quas sequi nobis itaque dolor ipsa, et autem sed?</p>
                        </div>
                        <div className="footer-content-divider animate-bottom">
                            <div className="social-media">
                                <h4>Follow along</h4>
                                <ul className="social-icons">
                                    <li>
                                        <a ><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a ><i className="fab fa-facebook-square"></i></a>
                                    </li>
                                    <li>
                                        <a ><i className="fab fa-pinterest"></i></a>
                                    </li>
                                    <li>
                                        <a ><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a ><i className="fab fa-tripadvisor"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="newsletter-container">
                                <h4>Newsletter</h4>
                                <form action="" className="newsletter-form">
                                    <input type="text" className="newsletter-input" placeholder='Your email address...' />
                                    <button className="newsletter-btn" type="submit">
                                        <i className="fas fa-envelope"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;