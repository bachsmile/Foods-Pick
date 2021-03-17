import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgApis from '../../container/imgApi/imgApi';
import './style.scss';
import User from '../../container/class/userClass';
import history from '../../router/history'
import RegisterForm from './register-form';
import UserAPi from '../../actions/service/api/userApi';
import LoginForm from './login-form';
import Loading from '../../components/animation/loading';
class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    signIn = () => {
        let container = document.getElementsByClassName('containerlg');
        container[0].classList.remove('sign-up-mode');
    }
    signUp = () => {
        let container = document.getElementsByClassName('containerlg');
        container[0].classList.add('sign-up-mode');
    }
    render() {
        return (
            <div className="containerlg">
                <div className="containerlg__forms">
                    <div className="signIn-signUp">
                        <LoginForm/>
                        <RegisterForm/>
                    </div>
                </div>
                <div className="panels">
                    <div className="panels__panel panels__left">
                        <div className="content">
                            <h3>New here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, necessitatibusss. Voluptatem quisquam eos dolorem illo, ratione inventore iure rerum!</p>
                            <button className="btnlg transparent" id="sign-up-btn" onClick={this.signUp}>Sign up</button>
                        </div>
                        <img src={imgApis.img9} className='imagelg' alt="" />
                    </div>
                    <div className="panels__panel panels__right">
                        <div className="content">
                            <h3>New here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, necessitatibusd. </p>
                            <button className="btnlg transparent" id="sign-up-btn" onClick={this.signIn}>Sign in</button>
                        </div>
                        <img src={imgApis.img10} className='imagelg' alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;