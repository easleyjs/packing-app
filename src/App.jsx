import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

import './App.css'
import { MantineProvider } from '@mantine/core';
// Reminder - all packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import RootLayout from './pages/Root.jsx';
import HomePage from './pages/Home.jsx';
import ContainersPage, { containerLoader } from './pages/ContainersPage.jsx';
import NewContainerPage, { createContainer } from './pages/NewContainerPage.jsx';
import ContainerDetail from './pages/ContainerDetail.jsx';

// to-do:
/*
loader to get Redux store (possibly do Thunk action) for Containers
try moving container/* routes as child routes under /containers

optimize New Container form:
- input component, select component
- input validation

firebase storage of containers/items/events/lists
.env file
tailwind
nested children have "sub-header" component? Not homepage.
authentication
setup lazy loading on non-"home" pages
deploy to firebase hosting
*/

function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    { path: '/', 
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'containers', element: <ContainersPage />, loader: containerLoader },
        { path: 'containers/new', element: <NewContainerPage />, action: createContainer },
        { path: 'containers/:containerId', element: <ContainerDetail /> },
       ]
    },

  ])

  //console.log(store.getState());

  return (
    <Provider store={ store }>
      <MantineProvider>
        <RouterProvider router={ router }></RouterProvider>
      </MantineProvider>
    </Provider>
  )
}

export default App
