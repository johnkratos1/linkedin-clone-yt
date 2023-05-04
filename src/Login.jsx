import React, { useState } from 'react'
import './Login.css'
import Logo from '../src/images/linkedin.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from './firebase'
import { login } from "./features/userSlice";

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch(error => alert(error)) 
    }

    const register = () => {
        if (!name) {
           return alert('Please enter a full name!') 
        }

        createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL:profilePic
                }))
            })
        })
        .catch((error) => alert(error))
    }

  return (
    <div className='login'>
        <div className="top">

        <h2>Linked</h2>
      <img src={Logo} alt="logo" />
        </div>
        <form>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name (required if registering)' />

            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional)' />

            <input value={email} onChange={e => setEmail(e.target.value)} type="Email" placeholder='Email' />

            <input value={password} onChange={e => setPassword(e.target.value)} type="Password" placeholder='Password' />

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member? {" "}<span className='login__register' onClick={register}>Register Now </span></p>
    </div>
  )
}

export default Login
