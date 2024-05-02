import React from 'react'
import { Grid, Text, Paper, Button } from '@mantine/core'

export default function EventDisplayCard ( { key, evt } ) {
  const { name, description, id } = evt

  return (
      <Paper
        p="md"
        mt="sm"
        shadow="md"
        radius="md"
        key={key}
        w="40%"
        style={{ cursor: 'default' }}
        withBorder
        onClick={() => { console.log( id ) }}
      >
          <Grid justify="space-between">
              <Grid.Col span="content">
                  <Text fw={500} size="md">{ name }</Text>
              </Grid.Col>
              <Grid.Col span="content">
                  <Text c="gray" size="sm">{ description }</Text>
              </Grid.Col>
              <Grid.Col span={2}>
                  <Button variant="light" color="red" size="xs" radius="xl">Remove</Button>
              </Grid.Col>
          </Grid>
      </Paper>
  )
}
