import './CarList.css'
import CarCard from '../CarCard/CarCard'


function CarList({ carList }) {

  console.log(carList)

  const formattedCars = carList.map( (car) => {
    return (
      <CarCard 
        key={car.car_vin} 
        code={car.car_vin}
        maker={car.maker}
        model={car.model}
        price={car.price}
        year={car.year}
      />
    )
  })

  console.log(formattedCars)


  return (
    <div className='car-list'>{formattedCars}</div>
  )
}

export default CarList