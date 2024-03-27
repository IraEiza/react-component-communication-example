import './CarCard.css'
import carImage  from '../../assets/car-image.png'

function CarCard({code, maker, model, price, year }) {

  return (
    <div className='car-card'>
      <h2>{code}</h2>
      <img src={carImage} alt="Car image" />
      <p className='details'>{`${maker} | ${model} | ${year}`}</p>
      <h4 className='price'>{price}</h4>
    
    </div>
  )
}

export default CarCard