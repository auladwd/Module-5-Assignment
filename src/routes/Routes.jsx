import { createBrowserRouter } from 'react-router';
import MainLayout from '../Pages/MainLayout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import ErrorPage from '../Pages/ErrorPage';
import LoadingSpinner from '../components/LoadingSpinner';
import Apps from '../Pages/Apps';
import Installation from './../Pages/Installation';
import AppsDetails from './../Pages/AppsDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        loader: () => fetch('/appData.json'),
        Component: Home,
      },
      {
        path: '/home',
        loader: () => fetch('/appData.json'),
        Component: Home,
      },
      {
        path: '/apps',
        loader: () => fetch('/appData.json'),
        Component: Apps,
      },
      {
        path: '/apps/:id',
        loader: () => fetch('/appData.json'),
        Component: AppsDetails,
      },
      { path: '/installation', Component: Installation },
      { path: 'about', Component: About },
    ],
  },
]);
