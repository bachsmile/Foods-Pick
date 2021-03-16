import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgApis from '../../container/imgApi/imgApi';
import './style.scss';
import User from '../../container/class/userClass';
import history from '../../router/history'
import RegisterForm from './register-form';
import UserAPi from '../../actions/service/api/userApi';
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
    onChangeUser = (event) => {
        let target = event.target;
        let name = target.name;
        var value = target.value;
        User[name] = value;
    }
    login = async(event) => {
        event.preventDefault();
        try {
            const res= await UserAPi.postLogin(User);
            if (res.message=='Success' ){
                window.localStorage.setItem('token',res.data.token);
                this.props.history.push('/Home');
            }
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    getApi= async (data) => {

        try {
            const res= await UserAPi.postLogin(data);
            if (res.message=='Success' ){
                console.log(res.data.token);
                window.localStorage.setItem('token',res.data.token);
                this.props.history.push('/Home');
            }
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    register=(event)=>{
        event.preventDefault();
        console.log(User);
        
    }
    render() {
        return (
            <div className="containerlg">
                <div className="containerlg__forms">
                    <div className="signIn-signUp">
                        <form action="" className='sign-in-form formlg'>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder='Username' name='userName' onChange={this.onChangeUser} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder='Password' name='userPassword' onChange={this.onChangeUser} />
                            </div>
                            <input type="submit" value='login' className="btnlg solid" onClick={this.login} />
                            <div className="socical">
                                <p className="socical__text">Or sign in with socical platforms</p>
                                <div className="socical__media">
                                    <a className="socical__icon"><i className="fab fa-facebook-f"></i></a>
                                    <a className="socical__icon"><i className="fab fa-google"></i></a>
                                    <a className="socical__icon"><i className="fab fa-twitter"></i></a>
                                    <a className="socical__icon"><i className="fab fa-linkedin-in"></i></a>
                                    <Link to='/Home' className="socical__icon"><i className="fas fa-home"></i></Link>
                                </div>
                            </div>
                        </form>
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