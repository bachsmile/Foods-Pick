import React, {  useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import imgApis from '../../container/imgApi/imgApi';
import './style.scss';
import RegisterForm from './register-form';
import LoginForm from './login-form';
import LoadingNumber from '../../components/animation/loading/loadingNumber';

LoginPage.propTypes = {
    
};

function LoginPage(props) {
    const [loadingWait, setloadingWait] = useState(true);
    const [Error, setError] = useState(true);
    useEffect(() => {
        const timeOut= setTimeout(() => {
            setloadingWait(false);
            setError(false);
        }, 2000);
    return () => {
        clearTimeout(timeOut)
    };
    }, []);
    var signIn = () => {
        let container = document.getElementsByClassName('containerlg');
        container[0].classList.remove('sign-up-mode');
    }
    var signUp = () => {
        let container = document.getElementsByClassName('containerlg');
        container[0].classList.add('sign-up-mode');
    }
    return (
        
        <div>
            <LoadingNumber/>
            {loadingWait?
                <div className='waiting'>WAITING.........!</div>
                :
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
                                <button className="btnlg transparent" id="sign-up-btn" onClick={signUp}>Sign up</button>
                            </div>
                            <img src={imgApis.img9} className='imagelg' alt="" />
                        </div>
                        <div className="panels__panel panels__right">
                            <div className="content">
                                <h3>New here</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, necessitatibusd. </p>
                                <button className="btnlg transparent" id="sign-up-btn" onClick={signIn}>Sign in</button>
                            </div>
                            <img src={imgApis.img10} className='imagelg' alt="" />
                        </div>
                    </div>
                </div>
                
           }
           
        </div>
    );
}

export default LoginPage;