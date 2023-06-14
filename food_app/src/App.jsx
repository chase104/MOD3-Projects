import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    age: 1,
    canEat: false
  });

  const [fruitArray, setFruitArray] = useState([])

  useEffect(() => {

    axios('/fruits').then((response)=> {
      console.log(response);
      setFruitArray(response.data)
    })

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (formData.age > 0) {
      axios({
         method: "POST",
         url: "/fruits",
         // goes to the server the app is from!
         data: formData
       })
    } else {
      // tell user negative values aren't allowed
    }
    // send form data to server create route
  }

  const handleChange = (e) => {
    let value = e.target.name === "canEat" ? e.target.checked : e.target.value;
    let newStateObject = {
      ...formData,
      [e.target.name]: value
    }
    setFormData(newStateObject)
  }


  let fruitJSX = fruitArray.map((fruit) => {
    return <div key={fruit._id} className={fruit.canEat ? "green" : "red"} >{fruit.name}</div>
  });

  return (
    <>
      <form id="create-fruit-form" onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="name">Fruit Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div className='input-container'>
          <label htmlFor="age">Fruit Age</label>
          <input type="number" name="age" min="1" value={formData.age} onChange={handleChange}/>
        </div>
        <div className='input-container'>
          <label htmlFor="canEat">Can Eat Fruit?</label>
          <input type="checkbox" name='canEat' checked={formData.canEat} onChange={handleChange}/>
        </div>
        <button>Submit</button>
      </form>

      <section id="display-fruit">
        {fruitJSX}
      </section>

    </>
  )
}

export default App
