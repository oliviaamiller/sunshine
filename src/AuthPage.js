import React from 'react';
import { useState } from 'react';
import { signIn, signUp, } from './services/fetch-utils.js';
import './App.css';

export default function AuthPage({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
    
  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);
      
    setCurrentUser(user);
  }
    
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);

    setCurrentUser(user);

    const newUser = {
      email,
      username
    };

    await addUser(newUser);
  }
    
  return (
    <div className='auth'>
      <p>Sunshine</p>
      <div className='auth-form'>
        <form onSubmit={handleSignIn}>
          <input onChange={e => setEmail(e.target.value)} value={email} name='email' required type='email' placeholder='email'/>
          <input onChange={e => setPassword(e.target.value)} value={password} name='password' required type='password' placeholder='password'/>
          <div className='auth-buttons'>
            <button type='submit'>Sign In</button>
            <button type="button" onClick={handleSignUp}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
