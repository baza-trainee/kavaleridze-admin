import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login';
import AddEvent from './components/AddEvent/AddEvent';
import EventList from './components/EventList/EventList';
import EditEvent from './components/EditEvent/EditEvent';
import Contacts from './components/Contacts/Contacts';
import Settings from './components/Settings/Settings';
import SharedLayout from './components/SharedLayout/SharedLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <AddEvent />,
      },
      {
        path: '/events',
        element: <EventList />,
      },
      {
        path: '/events/:slug',
        element: <EditEvent />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
