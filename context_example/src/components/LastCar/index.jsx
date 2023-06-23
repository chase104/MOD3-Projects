import React, { useContext } from 'react'
import { primaryContext } from '../../contexts/PrimaryContext'

const LastCar = () => {


    const {cars} = useContext(primaryContext);
  return (
    <div>This is the last car {cars[cars.length-1]}</div>
  )
}

export default LastCar