import React from 'react';
import { useState } from 'react';
import { signIn, signUp, addUser } from './services/fetch-utils.js';

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
    <div>
      <h3>Sunshine</h3>
      <form onSubmit={handleSignIn}>
        <label> Email
          <input onChange={e => setEmail(e.target.value)} value={email} name='email' required type='email'/>
        </label>
        <label> Password
          <input onChange={e => setPassword(e.target.value)} value={password} name='password' required type='password'/>
        </label>
        <button>SignIn</button>
      </form>

      <form onSubmit={handleSignUp}>
        <label> Email
          <input onChange={e => setEmail(e.target.value)} value={email} name='email' required type='email'/>
        </label>
        <label> Username
          <input onChange={e => setUsername(e.target.value)} value={username} name='username' required type='text'/>
        </label>
        <label> Password
          <input onChange={e => setPassword(e.target.value)} value={password} name='password' required type='password'/>
        </label>
        <button>SignUp</button>
      </form>
    </div>
  );
}
