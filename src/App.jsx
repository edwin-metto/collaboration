
import './App.css'
import Food from './assets/Images/Food'
import Login from './Components/Login'

import FoodOrder from './Payment/FoodOrder'

function App() {


  return (
    <>
      <div className='bg-green-500'>
        <h1 className='bg-blue-500'>collaborators</h1>
        <h2>Eugene maina</h2>
        <FoodOrder/>
        <Food/>
        <Login/>
        

      </div>

    </>
  )
}

export default App
