
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase';


function App() {
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);  
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        
        setIsVerified(currentUser.emailVerified);
      }
    });

    return () => unsubscribe();
  }, []);


  const resendVerification = async () => {
    if (user && !user.emailVerified) {
      try {
        await sendEmailVerification(user);
        setError('Verification email sent! Please check your inbox.');
      } catch (er) {
        setError('Failed to send verification email. Try again.');
      }
    }
  };

  return (
    <div>
      {user ? (
        isVerified ? (
          <Home />
        ) : (
          <div>
            <h2>Please verify your email</h2>
            <button onClick={resendVerification}>Resend Verification Email</button>
            <p>{error}</p>
          </div>
        )
      ) : (
        <Login />
        
        
      )}
    </div>
  );
}

export default App;
