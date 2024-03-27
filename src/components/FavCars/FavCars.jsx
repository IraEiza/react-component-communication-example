import './FavCars.css'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'

const FavCars = ({favCars, setFavCars}) => {

  const { theme }  = useContext(ThemeContext)

  const renderFavList = favCars.map((cocheFavoritizado) => {
    return <li key={cocheFavoritizado}>{cocheFavoritizado}</li>
  })

  const handleClear = () => {
    setFavCars([])
  }

  return (
    <div className={`fav-cars ${theme === 'light' ? 'light-fav-cars' : ''}`}>
      <h2>{`${favCars.length} cars selected`}</h2>
      <ul>{renderFavList}</ul>
      <button 
        onClick={handleClear}
        className={`${theme === 'light' ? 'light-button' : ''}`}
      >CLEAR FAVS</button>
    </div>
  )
}

FavCars.propTypes = {
  favCars: PropTypes.array,
  setFavCars: PropTypes.func
}

export default FavCars