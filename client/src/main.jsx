import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx'
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage.jsx';
import MyMix from './pages/MyMix.jsx';
import CreateMix from './pages/CreateMix.jsx';
import BrowseMix from './pages/BrowseMix.jsx';

//is this the right entry point? ask TA
//import roboto for Material UI
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'mymix',
        element: <MyMix />
      },
      {
        path: 'createmix',
        element: <CreateMix />
      },
      {
        path: 'browsemix',
        element: <BrowseMix />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
