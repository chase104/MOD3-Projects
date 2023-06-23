
import './App.css'
import Navbar from './components/navbar'
import Auth from './pages/auth'

function App() {

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
