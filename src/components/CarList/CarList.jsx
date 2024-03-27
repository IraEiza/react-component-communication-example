import './CarList.css'
import CarCard from '../CarCard/CarCard'
import PropTypes from 'prop-types'

function CarList({ carList, setFavCars }) {
  
  const formattedCars = carList.map((car) => {
    return (
      <CarCard 
        key={car.car_vin} 
        code={car.car_vin}
        maker={car.maker}
        model={car.model}
        price={car.price}
        year={car.year}
        setFavCars={setFavCars}
      />
    )
  })

  return (
    <div className='car-list'>{formattedCars}</div>
  )
}

CarList.propTypes = {
  carList: PropTypes.array,
  setFavCars: PropTypes.func
}

export default CarList