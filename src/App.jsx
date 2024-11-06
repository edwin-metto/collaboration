import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className=''>
      {user ? (
        <div>
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
