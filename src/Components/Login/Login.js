import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Classes from './login.module.css'
import {auth} from '../Checkout/firebase'
import {  useHistory } from 'react-router';

const Login =(props)=>{
    const history = useHistory();
    const [email,setUserEmail]=useState('');
    const [password,setUserPassword]=useState('');
    const LogInUser=(event)=>{
        event.preventDefault();
        console.log(event)
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=>{
            alert(e.message)
        })
    }
    
    
    
   
    const signUpUser=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(e=>{alert(e.message)})
    }
    return(
    <div className={Classes.login}>
        <Link>
            <img className={Classes.login_logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
        </Link>
        <div className={Classes.login_container}>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event=>setUserEmail(event.target.value)} type="email" required/>
                <h5>Password</h5>
                <input value={password} onChange={event=>setUserPassword(event.target.value)} type="password" required/><br/>
                <label for="check">Agree to terms and conditions</label>
                <input id="check" type="checkbox" required/><br/>
                <button onClick={LogInUser} type="submit" className={Classes.login__button}>Sign in</button>
                OR
                <button onClick={signUpUser} className={Classes.signup_button}>Create your account</button>
            </form>
        </div>
    </div>
    )
}
export default Login ;