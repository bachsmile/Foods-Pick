import React, { Component} from 'react';
import imgApis from '../../container/imgApi/imgApi';
import './loginPage.scss';  
import {Link} from 'react-router-dom';
import User from '../../container/class/userClass';
import history from './../../router/history'
class LoginPage extends Component {
    user= new User;
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    signIn=()=>{
        let container= document.getElementsByClassName('containerlg');
        container[0].classList.remove('sign-up-mode');
    }
    signUp=()=>{
        let container= document.getElementsByClassName('containerlg');
        container[0].classList.add('sign-up-mode');
    }
    onChangeUser=(event)=>{
        let target = event.target;
        let name = target.name;
        var value = target.value;
        this.user[name]=value;
    }
    login =(event)=>{
        event.preventDefault();
        if (this.user.username=='admin' &&  this.user.password=='admin'){
            console.log(this.user);
            this.props.history.push('/Home');
            document.cookie=`username=${this.user.username}`
        }
    }
    render(){
        return(
            <div className="containerlg">
                <div className="containerlg__forms">
                    <div className="signIn-signUp">
                        <form action="" className='sign-in-form formlg'>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder='Username' name='username' onChange={this.onChangeUser}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder='Password' name='password' onChange={this.onChangeUser}/>
                            </div>
                            <input type="submit" value='login' className="btnlg solid" onClick={this.login}/>
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
                        <form action="" className='sign-up-form formlg'>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder='Username'/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder='Email'/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder='Password'/>
                            </div>
                            <input type="submit" value='Sign up' className="btnlg solid"/>
                            <div className="socical">
                                <p className="socical__text">Or sign up with socical platforms</p>
                                <div className="socical__media">
                                    <a className="socical__icon"><i className="fab fa-facebook-f"></i></a>
                                    <a className="socical__icon"><i className="fab fa-google"></i></a>
                                    <a className="socical__icon"><i className="fab fa-twitter"></i></a>
                                    <a className="socical__icon"><i className="fab fa-linkedin-in"></i></a>
                                    <Link to='/Home' className="socical__icon"><i className="fas fa-home"></i></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panels">
                    <div className="panels__panel panels__left">
                        <div className="content">
                            <h3>New here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, necessitatibusss. Voluptatem quisquam eos dolorem illo, ratione inventore iure rerum!</p>
                            <button className="btnlg transparent" id="sign-up-btn" onClick={this.signUp}>Sign up</button>
                        </div>
                        <img src={imgApis.img9} className='imagelg' alt=""/>
                    </div>
                    <div className="panels__panel panels__right">
                        <div className="content">
                            <h3>New here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, necessitatibusd. </p>
                            <button className="btnlg transparent" id="sign-up-btn" onClick={this.signIn}>Sign in</button>
                        </div>
                        <img src={imgApis.img10} className='imagelg' alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;