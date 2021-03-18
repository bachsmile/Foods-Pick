import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { Link } from 'react-router-dom';
import User from '../../../container/class/userClass';
import UserAPi from '../../../actions/service/api/userApi';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoadingNumber from '../../../components/animation/loading/loadingNumber';

LoginForm.propTypes = {
    
};
function LoginForm(props) {
    const history = useHistory();
    var onChangeUser = (event) => {
        let target = event.target;
        let name = target.name;
        var value = target.value;
        User[name] = value;
        console.log(User);
    } 
    var login = async(event) => {
        event.preventDefault();
        try {
            const res= await UserAPi.postLogin(User);
            if (res.message=='Success' ){
                window.localStorage.setItem('token',res.data.token);
                history.push('/Home');
            }
            else{
                toast.error('login unsuccessful!' )
            }
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form action="" className='sign-in-form formlg'>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder='Username' name='userName' onChange={onChangeUser} />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder='Password' name='userPassword' onChange={onChangeUser} />
            </div>
            <input type="submit" value='login' className="btnlg solid" onClick={login} />
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
    );
}

export default LoginForm;