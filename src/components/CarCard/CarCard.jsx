import './CarCard.css'
import carImage  from '../../assets/car-image.png'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'

function CarCard({ code, maker, model, price, year, setFavCars }) {

  const { theme }  = useContext(ThemeContext)
  
  const handleOnclick = () => {
    setFavCars((current) => {return [...current, code]})
  }

  return (
    <div className={`car-card ${theme === 'light' ? 'light-car-card' : ''}`}>
      <h2>{code}</h2>
      <img src={carImage} alt="Car image" />
      <p className='details'>{`${maker} | ${model} | ${year}`}</p>
      <h4 className='price'>{price}</h4>
      <button 
        onClick={handleOnclick}
        className={`${theme === 'light' ? 'light-button' : ''}`}
      >LIKE</button>
    </div>
  )
}

CarCard.propTypes = {
  code: PropTypes.string,
  maker: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  year: PropTypes.number,
  setFavCars: PropTypes.func
}

export default CarCard