import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgApis from '../../../container/imgApi/imgApi';
import User from '../../../container/class/userClass';
import './style.scss'
RegisterForm.propTypes = {
    
};
function RegisterForm(props) {
    const [hideEye, setHideEye] = useState(true)
    var onChangeUser = (event) => {
        let target = event.target;
        let name = target.name;
        var value = target.value;
        User[name] = value;
        console.log(User);
    }  
    var register=(event)=>{
        event.preventDefault();
        console.log(User);   
    }
    var hidePass=(data)=>{
        setHideEye(!hideEye)
    }
    return (
        <form action="" className='sign-up-form formlg'>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder='Username' name='userName' onChange={onChangeUser}/>
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder='Email' name='userEmail' onChange={onChangeUser}/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder='Password' name='userPassword' onChange={onChangeUser}/>
                {
                    hideEye?<i className="fas fa-eye hidePass" onClick={()=>hidePass(0)}></i>:<i className="fas fa-eye-slash"onClick={()=>hidePass(0)}></i>    
                }       
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder='ConfirmPassword' name='Confirm password' onChange={onChangeUser}/>
                {
                    hideEye?<i className="fas fa-eye hidePass" onClick={()=>hidePass(0)}></i>:<i className="fas fa-eye-slash"onClick={()=>hidePass(0)}></i>    
                } 
            </div>
            <input type="submit" value='Sign up' className="btnlg solid" onClick={register}/>
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
    );
}

export default RegisterForm;