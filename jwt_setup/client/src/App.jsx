
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Auth from './pages/auth'
import axios from 'axios';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    let jwtToken = localStorage.getItem('jwt-token')
    console.log(jwtToken);
    if (jwtToken) {
      setToken(jwtToken)
    }
  }, [])

  if (token) {
    axios({
      method: "get",
      url: "/users/friends",
      headers: {
        Authorization: token
      }
    }).then((res) => console.log(res))
  }

  return (
    <>

      <Navbar />
      <Auth />
      {/* If Not logged in, show Auth (signup, login) */}
      {/* If logged in, show homepage! */}
    </>
  )
}

export default App
