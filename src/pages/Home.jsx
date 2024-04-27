import React from 'react'
import { Link } from 'react-router-dom'

// Gonna try putting the Mantine app shell in here.

function HomePage () {
  function myFunction ( test, someVar ) {

  }

  return (
      <>
          <h1>My Home Page</h1>
          <Link
                to="/containers"
          >Containers
          </Link>
      </>
  )
}

export default HomePage
