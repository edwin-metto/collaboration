
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import FoodOrder from './Payment/FoodOrder';
import Food from './assets/Images/Food';

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
        <>
          
          <Home />
          <Food />
          <FoodOrder />
        </>
      ) : (
        
        <Login />
      )}
    </div>
  );
}

export default App;
