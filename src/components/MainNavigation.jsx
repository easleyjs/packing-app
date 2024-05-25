import React from 'react';
import { Link } from 'react-router-dom';
import { Center, Container, Flex, Grid, Anchor } from '@mantine/core';

// import classes from './MainNavigation.module.css'

function MainNavigation () {
  return (
      <Container>
          <Grid pt="1rem" justify="space-between" align="center" columns={24}>
              <Grid.Col span={1}>
                  <Anchor underline="never" size="xl" component={Link} to="/">
                      PACKMATIC
                  </Anchor>
              </Grid.Col>
              <Grid.Col span="content" offset={13}>
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
              <Grid.Col span="content">
                  <Anchor underline="never" size="xl" component={Link} to="/">
                      Contact Us
                  </Anchor>
              </Grid.Col>
          </Grid>
      </Container>
  );
}

export default MainNavigation;
