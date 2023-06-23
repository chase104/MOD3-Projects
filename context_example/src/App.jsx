import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllCars from './components/AllCars';
import { primaryContext } from './contexts/PrimaryContext';

function App() {

  const { cars } = useContext(primaryContext)
  

  return (
    <>
      <div>Homepage</div>
      <div>This is the first car: {cars[0]}</div>
      <AllCars />
    </>
  )
}

export default App
