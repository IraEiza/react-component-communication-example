import './App.css'
import cars from './assets/cars.json'
import { useState } from 'react'
import CarList from './components/CarList/CarList'

function App() {

  const [carList, setCarList] = useState(cars)

  return (
    <>
      <CarList carList={carList}/>
    </>
  )
}

export default App
