import React from 'react'

const Navbar = () => {
  return (

    <div>
        <h2>My site!</h2>
        <p>User's name OR buttons will go here</p>
        {/* If logged in, show navbar with Welcome, Name */}
      {/* If not logged in, show signup and login buttons */}
    </div>
  )
}

export default Navbar