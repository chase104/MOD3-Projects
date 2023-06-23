import React, {  useContext } from 'react'
import LastCar from '../LastCar'
import { primaryContext } from '../../contexts/PrimaryContext'

const AllCars = () => {

    const { cars } = useContext(primaryContext);

  return (
    <>
        <div>This is the cars array {cars}</div>
        <LastCar />
    </>
  )
}

export default AllCars