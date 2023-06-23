import React, {  useContext, useEffect } from 'react'
import LastCar from '../LastCar'
import { primaryContext } from '../../contexts/PrimaryContext'
import axios from 'axios';

const AllCars = () => {

    const { cars } = useContext(primaryContext);


    useEffect(() => {
        const getData = async () => {
           let response = await axios("https://jsonplaceholder.typicode.com/todos/1")
            console.log(response);
        }
        getData()
    }, [])

  return (
    <>
        <div>This is the cars array {cars}</div>
        <LastCar />
    </>
  )
}

export default AllCars