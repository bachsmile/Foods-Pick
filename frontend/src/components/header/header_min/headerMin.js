import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './headerMin.scss'
class HeaderMin extends Component{
    render(){
        return(
            <div className="headerS">
                <div className="containerS">
                    <nav className="nav">
                        <div className="menu-toggle" onClick={this.clickToggle}>
                            <i className="fas fa-bars"></i>
                            <i className="fas fa-times"></i>
                        </div>
                        <a  className="logo">
                            <img className='ImgBgHome' src="https://parkofideas.com/foodz/demo/wp-content/uploads-new/2019/04/demo3-2428546643.svg" alt=""/>
                        </a>
                        <ul className="nav-list">
                            <li className="nav-item">
                            <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">Reservations</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">News</a>
                        </li>
                        <li className="nav-item">
                                <Link  to="/shop" className="nav-link">Shop</Link>
                            
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">Contact</a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default HeaderMin;