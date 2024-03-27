import './App.css'
import cars from './assets/cars.json'
import { useState } from 'react'
import CarList from './components/CarList/CarList'
import FavCars from './components/FavCars/FavCars'
import { SearchBar } from './components/SearchBar/SearchBar'
import { ThemeContext } from './context/Theme'

function App() {

  const [favCars, setFavCars] = useState([])
  const [searchValue, setSearchValue] = useState([])
  const [theme, setTheme] = useState('dark')

  const filteredCars = cars.filter( car => {
    return (
      car.maker.includes(searchValue) ||
      car.model.includes(searchValue)
    )
  })
  
  return (
    <div id="app" className={theme === 'light' ? 'light-app' : ''}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <FavCars favCars={favCars} setFavCars={setFavCars}/>
        <SearchBar setSearchValue={setSearchValue}/>
        <CarList carList={filteredCars} setFavCars={setFavCars}/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App


// 'string1'.includes('matchString')
// 'Toyota'.includes('ot') -> true