import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderMin from '../../components/header/header_min'
import './error.scss';
import { toast } from 'react-toastify';
import Loading from '../../components/animation/loading';
class ErrorPage extends Component {
    render() {
        return (
            <div className='error'>
                <HeaderMin />
                <div className="detail">
                    <div className="noFound">
                        <div className="title">404</div>
                        <div className="lable">
                            NOT FOUND PAGE
                        </div>
                        <div className='back'>
                            <span>Click back to home
                                <span className='pannelBack'>
                                    <Link to='/' ><i className="fas fa-home iconHome"></i></Link>
                                    <div className="nextBtn1">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ErrorPage