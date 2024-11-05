import './App.css'
import Food from './assets/Images/Food'
import Login from './Components/Login'
import Home from './Components/Home'

import FoodOrder from './Payment/FoodOrder'

function App() {


  return (
    <>
      <div>
        <Home/>
        <Food/>
        <Login/>
        <FoodOrder/>
      </div>
    </>
  )
}

export default App
