import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const googleProvider = new GoogleAuthProvider();

  
  const handleSignup = async (e) => {
    e.preventDefault(); 
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signup successful');
    } catch (error) {
      console.log(error);
      setLoginError(error.message); 
    }
  };

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully");
    } catch (error) {
      console.log(error.code);
      setLoginError(error.message); 
    }
  };

  
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Google login successful");
    } catch (error) {
      console.log(error);
      setLoginError(error.message); 
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form className='log' onSubmit={handleLogin}>
        <input 
          type='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='Enter your email...' 
        />
        <input 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder='Enter your password...' 
        />
        <button type='submit'>Log in</button>
      </form>

      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleGoogleLogin}>Continue with Google</button>

    
      {loginError && <p>{loginError}</p>}
    </div>
  );
}

export default Login;
