import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient, Query } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './store'

import {
  MantineProvider
} from '@mantine/core'
// Reminder - all packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'

import RootLayout from './pages/Root.jsx'
import HomePage from './pages/Home.jsx'
import EventsPage from './pages/EventsPage.jsx'
import ContainersPage from './pages/ContainersPage.jsx' //, { containerLoader }
import NewContainerPage, { createContainer } from './pages/NewContainerPage.jsx'
import ContainerDetail from './pages/ContainerDetail.jsx'

// to-do:
/*
loader to get Redux store (possibly do Thunk action) for Containers
try moving container/* routes as child routes under /containers

optimize New Container form:
- input component, select component
- input validation

*/

// https://mantine.dev/styles/css-variables/#css-variables-resolver
const queryClient = new QueryClient()
function App () {
  const router = createBrowserRouter( [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'events', element: <EventsPage /> },
        { path: 'containers', element: <ContainersPage /> }, // loader: containerLoader
        { path: 'containers/new', element: <NewContainerPage />, action: createContainer },
        { path: 'containers/:containerId', element: <ContainerDetail /> }
      ]
    }

  ] )

  return (
      <Provider
            store={ store }
      >
          <MantineProvider>
              <QueryClientProvider client={queryClient}>
                  <RouterProvider
                    router={ router }
                  >
                  </RouterProvider>
              </QueryClientProvider>
          </MantineProvider>
      </Provider>
  )
}

export default App
