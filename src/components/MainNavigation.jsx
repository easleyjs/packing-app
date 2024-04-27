import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Anchor } from '@mantine/core'

// import classes from './MainNavigation.module.css'

function MainNavigation () {
  return (
      <Grid py="md" justify="flex-start" align="flex-start" grow>
          <Grid.Col span="content" offset={2}>
              <Anchor underline="never" size="xl" component={Link} to="/">
                  PACKMATIC
              </Anchor>
          </Grid.Col>
          <Grid.Col span="content" offset={4}>
              <Anchor underline="never" size="xl" component={Link} to="/events">
                  Events
              </Anchor>
          </Grid.Col>
          <Grid.Col span="content">
              <Anchor underline="never" size="xl" component={Link} to="/containers">
                  Containers
              </Anchor>
          </Grid.Col>
          <Grid.Col span="content">
              <Anchor underline="never" size="xl" component={Link} to="/">
                  Lists
              </Anchor>
          </Grid.Col>
          <Grid.Col span={1}>
              <Anchor underline="never" size="xl" component={Link} to="/">
                  Contact Us
              </Anchor>
          </Grid.Col>
          <Grid.Col span={1}></Grid.Col>
      </Grid>
  )
}

export default MainNavigation
