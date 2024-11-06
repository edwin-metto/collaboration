import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification } from 'firebase/auth';
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const googleProvider = new GoogleAuthProvider();

  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signup successful');
      
      // Send verification email
      await sendEmailVerification(user);
      setSuccessMessage('Verification email sent! Please check your inbox.');
      setLoginError('');
    } catch (error) {
      console.log(error);
      setLoginError(error.message);
      setSuccessMessage('');
    }
  };

  // Handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user's email is verified
      if (!user.emailVerified) {
        setLoginError('Please verify your email address. Check your inbox for the verification email.');
        setSuccessMessage('');
        return;
      }

      console.log("Logged in successfully");
    } catch (error) {
      console.log(error.code);
      setLoginError(error.message);
    }
  };

  // Handle Google login
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
    <div className='h-[900px]'>
      <form className='log p-10 w-[500px] bg-gray-100 m-10 rounded-3xl mx-[30%] my-[20px]' onSubmit={handleLogin}>
        
        <h1 className='text-green-700 '>Registration form</h1>

        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email...'
          className='p-2 m-4 rounded-3xl w-full'
        />
        <br />
        
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password...'
          className='p-2 m-4 rounded-3xl w-full'
        />
        <br />

        {/* Login button */}
        <button type='submit' className='w-full p-1 rounded-3xl '>Log in</button>
        <br />

        {/* Signup button */}
        <button onClick={handleSignup} className='w-[30%] rounded-3xl'>Sign Up</button>
        
        {/* Google login button */}
        <button onClick={handleGoogleLogin} className='w-[50%]  rounded-3xl'>Continue with Google</button>
      </form>

      {/* Success or error messages */}
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default Login;
