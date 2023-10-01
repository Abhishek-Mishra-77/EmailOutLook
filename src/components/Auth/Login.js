import React from 'react';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { userSignIn } from '../../store/authSlice';
import './Login.css';

const Login = () => {

    const dispatch = useDispatch();
    const loginHadler = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(userSignIn({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email
            }))
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <div className='login-main'>
            <div className='login-logo'>
                <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png' alt='img' />
                <button className='gmail-login' onClick={loginHadler}>Login with Gmail</button>
            </div>

        </div>
    )
}

export default Login