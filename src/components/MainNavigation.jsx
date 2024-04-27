import React from 'react'
import { Link } from 'react-router-dom'
import { Group } from '@mantine/core'

// import classes from './MainNavigation.module.css'

function MainNavigation () {
  return (
      <Group justify="center">
          <Link to="/"><h3>Home</h3></Link>
          <Link to="/">Items</Link>
          <Link to="/containers">Containers</Link>
          <Link to="/">Events</Link>
          <Link to="/">Lists</Link>
          <Link to="/">Contact Us</Link>
      </Group>
  )
}

export default MainNavigation
